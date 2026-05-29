# خطوات رفع المشروع على GitHub

## الخطوات:

1. افتح Terminal/Command Prompt في مجلد المشروع

2. شغّل هذه الأوامر بالترتيب:

```bash
# تهيئة git repository
git init

# إضافة بيانات المستخدم
git config user.name "حمدي محمد"
git config user.email "7amdyabokabir@gmail.com"

# إضافة جميع الملفات
git add .

# عمل commit أول
git commit -m "Initial commit: Update profile image and testimonial images"

# تسمية branch الرئيسية إلى main
git branch -M main

# إضافة remote GitHub
git remote add origin https://github.com/hamdyabokabir/Hamdy.com.git

# رفع المشروع إلى GitHub
git push -u origin main
```

## ملاحظات:

- قد يطلب منك username و token/password
- إذا استخدمت SSH بدل HTTPS:
  ```bash
  git remote add origin git@github.com:hamdyabokabir/Hamdy.com.git
  ```

## التغييرات التي تم إجراؤها:

✅ تم تغيير صورة البروفايل إلى: `/image/e5eeb1f2-c5ab-4c69-93c7-f530169f1ce0.jpg`
✅ تم تغيير صور التقييمات إلى: `/image/download.jpg`
✅ تم تحديث package.json بإضافة setup-profile script

## ملفات جاهزة للرفع:

- README.md
- package.json
- tsconfig.json
- vite.config.ts
- index.html
- .gitignore
- src/ (جميع الملفات)
