@echo off
REM Copy dist contents to root for GitHub Pages

cd /d h:\hunter-digital-agency---حمدي-محمد

echo 📁 جاري نسخ ملفات dist إلى الجذر...

REM Copy assets folder
xcopy /E /I /Y dist\assets assets

REM Copy .nojekyll
copy /Y dist\.nojekyll .nojekyll

echo ✅ تم النسخ بنجاح!
echo.

REM Add to git
git add .
git status

echo.
echo 💾 جاري عمل commit...
git commit -m "Deploy: Copy compiled dist to root for GitHub Pages

- Move dist contents to project root
- Ensure correct index.html is served
- All assets properly configured for GitHub Pages

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo ⬆️ جاري الرفع...
git push origin main

echo.
echo ✅ تم! الموقع سيكون متاح خلال دقيقة.
echo 📍 URL: https://hamdyabokabir.github.io/Hamdy.com/
pause
