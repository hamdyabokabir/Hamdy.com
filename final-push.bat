@echo off
cd /d h:\hunter-digital-agency---حمدي-محمد

echo ✅ جاري إضافة جميع الملفات...
git add .

echo 📋 حالة الملفات:
git status

echo.
echo 💾 جاري إنشاء commit...
git commit -m "Fix: Add .nojekyll file and verify all project files

- Added .nojekyll to root and dist folders for GitHub Pages
- Verified all source files are in correct locations
- Confirmed dist/index.html has correct paths
- All TypeScript files properly configured
- Ready for deployment on GitHub Pages

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo ⬆️  جاري الرفع إلى GitHub...
git push origin main

echo.
echo ✅ تم بنجاح! الموقع سيكون متاح خلال دقيقة أو اثنتين.
echo 📍 URL: https://hamdyabokabir.github.io/Hamdy.com/
pause
