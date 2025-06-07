#!/bin/bash

echo "�� Quick redeployment with English-only version..."

# Stop current containers
sudo docker-compose down

# Clean up to ensure fresh build
echo "🧹 Cleaning up for fresh build..."
sudo docker system prune -f

# Clear npm cache in case of dependency issues
echo "📦 Clearing npm cache..."
sudo docker run --rm -v $(pwd):/app -w /app node:18-alpine npm cache clean --force

# Rebuild and start
echo "🔨 Rebuilding with simplified English version..."
sudo docker-compose up --build -d

# Check status
sleep 10
echo "📊 Container status:"
sudo docker-compose ps

echo "📋 Recent logs:"
sudo docker-compose logs --tail=15

# Check if container is healthy
if sudo docker-compose ps | grep -q "Up"; then
    echo "✅ Quick redeploy completed successfully!"
    echo "🌐 Test your application at: http://ec2-43-207-215-187.ap-northeast-1.compute.amazonaws.com:3000/"
    echo "🎯 The site is now English-only and should build without issues!"
else
    echo "❌ Container failed to start. Check logs above for errors."
fi 