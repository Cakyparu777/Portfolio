#!/bin/bash

echo "🔄 Quick redeployment with fixed i18n issues..."

# Stop current containers
echo "🛑 Stopping containers..."
sudo docker-compose down

# Clean up to ensure fresh build
echo "🧹 Cleaning up for fresh build..."
sudo docker system prune -f

# Check if there are any remaining i18n references
echo "🔍 Checking for remaining i18n references..."
grep -r "react-i18next" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.lock" || echo "✅ No react-i18next references found"
grep -r "useTranslation" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.lock" || echo "✅ No useTranslation references found"

# Show current memory state
echo "💾 Current system resources:"
free -h

# Build with detailed logging
echo "🔨 Rebuilding with detailed output..."
sudo docker-compose up --build 2>&1 | tee build.log &
BUILD_PID=$!

# Monitor build progress
sleep 30
while ps -p $BUILD_PID > /dev/null; do
    echo "📊 Build still running... Memory usage:"
    free -m | grep Mem
    sleep 30
done

# Check if build completed successfully
sleep 5
if sudo docker-compose ps | grep -q "Up"; then
    echo "✅ Build completed successfully!"
    echo "🌐 Test your application at: http://ec2-43-207-215-187.ap-northeast-1.compute.amazonaws.com:3000/"
    echo "🎯 The site should now work without i18n issues!"
    
    echo "📊 Container stats:"
    sudo docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}"
else
    echo "❌ Build failed. Checking logs..."
    echo "📋 Build log tail:"
    tail -50 build.log
    
    echo "📋 Docker compose logs:"
    sudo docker-compose logs --tail=20
fi 