# Build stage
FROM node:18-alpine AS builder

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies with optimizations
RUN npm ci --verbose \
    --prefer-offline \
    --no-audit \
    --progress=false \
    --loglevel=error

# Copy source code
COPY . .

# Set memory limit and build optimizations
ENV NODE_OPTIONS="--max-old-space-size=1024 --max-semi-space-size=128"
ENV NEXT_TELEMETRY_DISABLED=1
ENV CI=true

# Build the application with timeout handling
RUN timeout 300s npm run build || (echo "Build timed out after 5 minutes" && exit 1)

# Production stage
FROM node:18-alpine AS runner

# Install dumb-init and basic utilities
RUN apk add --no-cache dumb-init wget curl

# Create non-root user for security
RUN addgroup -S app && adduser -S app -G app

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production --verbose \
    --prefer-offline \
    --no-audit \
    --progress=false \
    --loglevel=error && \
    npm cache clean --force

# Copy built application from builder stage
COPY --from=builder --chown=app:app /app/.next ./.next
COPY --from=builder --chown=app:app /app/public ./public

# Change to non-root user
USER app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Expose port
EXPOSE 3000

# Health check with timeout
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider --timeout=5 http://localhost:3000 || exit 1

# Start the application with dumb-init
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
