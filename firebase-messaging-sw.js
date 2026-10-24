// استيراد سكربتات Firebase الخاصة بالخدمة (تأكد من مطابقة الإصدار الموجود في ملف index.html)
importScripts('https://www.gstatic.com/firebasejs/10.10.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.1/firebase-messaging-compat.js');

// تهيئة Firebase في ملف الـ Service Worker باستخدام إعدادات مشروعك
firebase.initializeApp({
  apiKey: "AIzaSyCqboMbyZpmtf1tLZu8cETSPfXVs_PGDzU",
  authDomain: "mylove-d2976.firebaseapp.com",
  projectId: "mylove-d2976",
  storageBucket: "mylove-d2976.firebasestorage.app",
  messagingSenderId: "450467342367",
  appId: "1:450467342367:web:cb9fe1997dc367e1fdcd2a"
});

// تهيئة خدمة الرسائل
const messaging = firebase.messaging();
