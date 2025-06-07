#!/bin/bash

echo "🔄 Quick redeployment for translation fixes..."

# Stop current containers
sudo docker-compose down

# Rebuild and start
echo "🔨 Rebuilding with translation fixes..."
sudo docker-compose up --build -d

# Check status
sleep 5
echo "📊 Container status:"
sudo docker-compose ps

echo "📋 Recent logs:"
sudo docker-compose logs --tail=10

echo "✅ Quick redeploy completed!"
echo "🌐 Test your application at: http://ec2-43-207-215-187.ap-northeast-1.compute.amazonaws.com:3000/" 