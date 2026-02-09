#!/bin/bash

echo "🧪 Testing with minimal page to isolate build issues..."

# Backup original page
sudo cp app/page.tsx app/page-original.tsx

# Use simple page temporarily
sudo cp app/page-simple.tsx app/page.tsx

# Stop current containers
sudo docker-compose down

# Try building with simple page
echo "🔨 Building with minimal page..."
if timeout 300s sudo docker-compose up --build -d; then
    echo "✅ Simple page builds successfully!"
    echo "📋 Logs:"
    sudo docker-compose logs --tail=10
    
    echo "🔄 Now testing with original page..."
    # Restore original page
    sudo cp app/page-original.tsx app/page.tsx
    
    # Rebuild with original page
    sudo docker-compose down
    echo "🔨 Building with full page..."
    timeout 300s sudo docker-compose up --build -d
    
else
    echo "❌ Even simple page failed to build"
    echo "📋 Error logs:"
    sudo docker-compose logs
    
    # Restore original page
    sudo cp app/page-original.tsx app/page.tsx
fi

echo "🧹 Cleaning up test files..."
sudo rm -f app/page-simple.tsx app/page-original.tsx

echo "✅ Test completed!" 