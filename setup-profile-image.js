const fs = require('fs');
const path = require('path');

// Paths
const sourceImage = path.join(__dirname, 'image', 'e5eeb1f2-c5ab-4c69-93c7-f530169f1ce0.jpg');
const publicDir = path.join(__dirname, 'public');
const assetsDir = path.join(publicDir, 'assets');
const destination = path.join(assetsDir, 'profile_image.png');

try {
  // Create directories
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('✓ Created public directory');
  }

  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
    console.log('✓ Created assets directory');
  }

  // Copy file
  fs.copyFileSync(sourceImage, destination);
  console.log('✓ تم نسخ الصورة الشخصية بنجاح!');
  console.log(`✓ الصورة الجديدة في: ${destination}`);
} catch (error) {
  console.error('❌ خطأ:', error.message);
  process.exit(1);
}
