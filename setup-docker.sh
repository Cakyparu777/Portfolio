#!/bin/bash

# Setup script for Docker on EC2
echo "Setting up Docker permissions and optimizations..."

# Add current user to docker group
sudo usermod -aG docker $USER

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Set up swap space if not exists (helps with memory during builds)
if [ ! -f /swapfile ]; then
    echo "Creating swap space..."
    sudo dd if=/dev/zero of=/swapfile bs=1024 count=1048576  # 1GB swap
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile swap swap defaults 0 0' | sudo tee -a /etc/fstab
fi

# Optimize Docker daemon settings
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json > /dev/null <<EOF
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "storage-driver": "overlay2"
}
EOF

sudo systemctl restart docker

echo "Setup complete! Please log out and log back in for group changes to take effect."
echo "Or run: newgrp docker" 