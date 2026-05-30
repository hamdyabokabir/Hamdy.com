@echo off
REM Final deployment script - Build, Copy Images, and Push

cd /d h:\hunter-digital-agency---حمدي-محمد

echo 🔨 جاري بناء المشروع مع المسارات الجديدة...
npm run build

echo.
echo 📁 جاري نسخ الصور...
if not exist "assets" mkdir assets
copy /Y image\download.jpg assets\download.jpg
copy /Y image\e5eeb1f2-c5ab-4c69-93c7-f530169f1ce0.jpg assets\e5eeb1f2-c5ab-4c69-93c7-f530169f1ce0.jpg

REM Also copy to dist
copy /Y assets\*.jpg dist\assets\

echo ✅ تم نسخ الصور!

echo.
echo 📝 جاري إضافة الملفات...
git add .

echo.
echo 💾 جاري عمل commit...
git commit -m "Fix image paths and deploy with correct assets

- Updated data.ts to use /Hamdy.com/assets/ paths
- Copied images to assets folder
- Rebuilt project with correct image paths
- Ready for display on GitHub Pages

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo ⬆️  جاري الرفع إلى GitHub...
git push origin main

echo.
echo ✅ تم! الموقع سيتم تحديثه خلال دقيقة.
echo 📍 URL: https://hamdyabokabir.github.io/Hamdy.com/
echo 📸 الصور ستظهر الآن!
pause
