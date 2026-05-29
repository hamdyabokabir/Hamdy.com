@echo off
REM Script to push the project to GitHub
REM Run this from the project root directory

echo 🚀 جاري رفع المشروع على GitHub...
echo.

REM Initialize git
git init

REM Configure user
git config user.name "HUNTER"
git config user.email "7amdyabokabir@gmail.com"

REM Add all files
echo 📝 جاري إضافة الملفات...
git add .

REM Create initial commit
echo 💾 جاري إنشاء commit أول...
git commit -m "Initial commit: Update profile image and testimonial images"

REM Rename branch to main
git branch -M main

REM Add remote
echo 🔗 جاري إضافة GitHub remote...
git remote add origin https://github.com/hamdyabokabir/Hamdy.com.git

REM Push to GitHub
echo ⬆️  جاري رفع المشروع...
git push -u origin main

echo.
echo ✅ تم رفع المشروع بنجاح!
echo 📍 الريبو: https://github.com/hamdyabokabir/Hamdy.com
pause
