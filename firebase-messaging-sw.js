// استيراد سكربتات Firebase الخاصة بالخدمة (تأكد من مطابقة الإصدار الموجود في ملف index.html)
importScripts('https://www.gstatic.com/firebasejs/10.10.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.1/firebase-messaging-compat.js');

// تهيئة Firebase في ملف الـ Service Worker باستخدام إعدادات مشروعك
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
});

// تهيئة خدمة الرسائل
const messaging = firebase.messaging();
