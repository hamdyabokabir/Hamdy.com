#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const projectDir = path.join(__dirname);

try {
  console.log('🚀 جاري تهيئة Git Repository...');
  
  // Initialize git
  execSync('git init', { cwd: projectDir, stdio: 'inherit' });
  
  // Configure git user
  console.log('\n👤 تهيئة بيانات المستخدم...');
  execSync('git config user.name "HUNTER"', { cwd: projectDir });
  execSync('git config user.email "7amdyabokabir@gmail.com"', { cwd: projectDir });
  
  // Add all files
  console.log('\n📝 إضافة الملفات...');
  execSync('git add .', { cwd: projectDir, stdio: 'inherit' });
  
  // Create commit
  console.log('\n💾 إنشاء Commit...');
  execSync('git commit -m "Initial commit: Update profile image and testimonial images - Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"', { 
    cwd: projectDir, 
    stdio: 'inherit' 
  });
  
  // Rename branch to main
  console.log('\n🌿 تسمية الـ Branch إلى main...');
  try {
    execSync('git branch -M main', { cwd: projectDir });
  } catch (e) {
    // Branch might already be named main
  }
  
  // Add remote
  console.log('\n🔗 إضافة Remote GitHub...');
  try {
    execSync('git remote add origin git@github.com:hamdyabokabir/Hamdy.com.git', { cwd: projectDir });
  } catch (e) {
    if (!e.message.includes('already exists')) {
      throw e;
    }
    console.log('⚠️ Remote موجود بالفعل');
  }
  
  // Push to GitHub
  console.log('\n⬆️ جاري الرفع إلى GitHub...');
  execSync('git push -u origin main', { cwd: projectDir, stdio: 'inherit' });
  
  console.log('\n✅ تم الرفع بنجاح! 🎉');
  console.log('📍 الريبو: https://github.com/hamdyabokabir/Hamdy.com');
  
} catch (error) {
  console.error('\n❌ خطأ:', error.message);
  process.exit(1);
}
