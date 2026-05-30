@echo off
REM Copy images to assets folder for GitHub Pages

cd /d h:\hunter-digital-agency---حمدي-محمد

echo 📁 جاري نسخ الصور من image\ إلى assets\...

REM Ensure assets folder exists
if not exist "assets" mkdir assets

REM Copy image files
copy /Y image\download.jpg assets\download.jpg
copy /Y image\e5eeb1f2-c5ab-4c69-93c7-f530169f1ce0.jpg assets\e5eeb1f2-c5ab-4c69-93c7-f530169f1ce0.jpg
copy /Y image\ef500aa6-a4c1-43e2-a66e-c04723d82bab.jpg assets\ef500aa6-a4c1-43e2-a66e-c04723d82bab.jpg

echo ✅ تم نسخ الصور!
echo.

REM Also copy to dist/assets
if not exist "dist\assets" mkdir dist\assets
copy /Y assets\*.jpg dist\assets\

echo.
echo 💾 جاري عمل commit...
git add assets/
git add dist/assets/*.jpg

echo.
git commit -m "Add images: profile and testimonials

- Added download.jpg for testimonials
- Added e5eeb1f2-c5ab-4c69-93c7-f530169f1ce0.jpg for profile
- Images now deployed to assets folder

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo ⬆️ جاري الرفع...
git push origin main

echo.
echo ✅ تم! الصور سيتم عرضها خلال دقيقة.
pause
