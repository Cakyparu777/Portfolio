#!/bin/bash

# Build and Deploy Script for EC2
set -e

echo "🚀 Starting build and deployment process..."

# Function to cleanup on error
cleanup() {
    echo "❌ Build failed, cleaning up..."
    sudo docker-compose down || true
    sudo docker system prune -f || true
}

# Set up error handling
trap cleanup ERR

# Check Docker daemon
echo "🔍 Checking Docker daemon..."
if ! sudo docker info > /dev/null 2>&1; then
    echo "❌ Docker daemon is not running. Starting Docker..."
    sudo systemctl start docker
    sleep 5
fi

# Clean up existing containers and images
echo "🧹 Cleaning up existing containers..."
sudo docker-compose down || true
sudo docker system prune -f

# Check available memory
echo "💾 Checking system resources..."
free -h
echo "💽 Disk space:"
df -h

# Check swap space
if ! swapon --show | grep -q "/swapfile"; then
    echo "⚠️  No swap detected. Consider running setup-docker.sh first"
fi

# Build with resource monitoring
echo "🔨 Starting build process..."
echo "⏰ Build timeout is set to 10 minutes"

# Monitor build process in background
(
    while true; do
        sleep 30
        echo "📊 Memory usage:"
        free -m | grep Mem
        echo "🐳 Docker processes:"
        sudo docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" || true
    done
) &
MONITOR_PID=$!

# Build the application
if timeout 600s sudo docker-compose up --build -d; then
    echo "✅ Build completed successfully!"
    
    # Stop monitoring
    kill $MONITOR_PID 2>/dev/null || true
    
    # Check if containers are running
    sleep 10
    if sudo docker-compose ps | grep -q "Up"; then
        echo "🎉 Application is running successfully!"
        echo "🌐 Access your application at: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4):3000"
        
        # Show logs
        echo "📋 Recent logs:"
        sudo docker-compose logs --tail=20
        
        # Show resource usage
        echo "📊 Container resource usage:"
        sudo docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}"
        
    else
        echo "❌ Containers failed to start properly"
        echo "📋 Error logs:"
        sudo docker-compose logs
        exit 1
    fi
else
    echo "❌ Build timed out or failed"
    kill $MONITOR_PID 2>/dev/null || true
    
    echo "📋 Build logs:"
    sudo docker-compose logs
    
    echo "💾 Final memory state:"
    free -h
    
    cleanup
    exit 1
fi

echo "🎯 Deployment completed successfully!" 