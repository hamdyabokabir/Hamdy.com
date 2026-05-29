#!/bin/bash

# Script to push the project to GitHub
# Run this from the project root directory

echo "🚀 جاري رفع المشروع على GitHub..."
echo ""

# Initialize git
git init

# Configure user
git config user.name "HUNTER"
git config user.email "7amdyabokabir@gmail.com"

# Add all files
echo "📝 جاري إضافة الملفات..."
git add .

# Create initial commit
echo "💾 جاري إنشاء commit أول..."
git commit -m "Initial commit: Update profile image and testimonial images

- Updated profile image to: /image/e5eeb1f2-c5ab-4c69-93c7-f530169f1ce0.jpg
- Updated testimonial images to: /image/download.jpg

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

# Rename branch to main
git branch -M main

# Add remote
echo "🔗 جاري إضافة GitHub remote..."
git remote add origin https://github.com/hamdyabokabir/Hamdy.com.git

# Push to GitHub
echo "⬆️  جاري رفع المشروع..."
git push -u origin main

echo ""
echo "✅ تم رفع المشروع بنجاح!"
echo "📍 الريبو: https://github.com/hamdyabokabir/Hamdy.com"
