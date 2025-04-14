# Install dependencies and build the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies separately to leverage Docker cache
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the app
COPY . .

# Build the app for production
RUN npm run build

# Production image — minimal, secure, fast
FROM node:18-alpine AS runner

# Create non-root user for security
RUN addgroup -S app && adduser -S app -G app
USER app

WORKDIR /app

# Copy only necessary files from builder
COPY --chown=app:app --from=builder /app/public ./public
COPY --chown=app:app --from=builder /app/.next ./.next
COPY --chown=app:app --from=builder /app/node_modules ./node_modules
COPY --chown=app:app --from=builder /app/package.json ./package.json

# Set production environment
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
