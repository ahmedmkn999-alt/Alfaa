// 🔐 ALPHA SECURITY SYSTEM
// تم الربط بقاعدة البيانات الأصلية (FullMark 2025)

const firebaseConfig = {
    apiKey: "AIzaSyD1QB3qaFfkGYq0OWOEAr83V25NAPFwxzs",
    authDomain: "fullmark-2025.firebaseapp.com",
    databaseURL: "https://fullmark-2025-default-rtdb.firebaseio.com",
    projectId: "fullmark-2025",
    storageBucket: "fullmark-2025.firebasestorage.app",
    messagingSenderId: "963956202032",
    appId: "1:963956202032:web:4df914457d79b75dee2bf5"
};

// تهيئة الفايربيس (تمنع تكرار التشغيل)
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// دالة التحقق من الدخول
function checkAuth() {
    // 1. البحث عن الكود المحفوظ في المتصفح
    const code = localStorage.getItem('alpha_user_code');
    
    // 2. لو مفيش كود، اطرد المستخدم لصفحة الدخول فوراً
    if (!code) {
        // التأكد إننا مش في صفحة الدخول أصلاً عشان ميعملش Loop
        if (!window.location.href.includes('index.html')) {
            window.location.href = 'index.html';
        }
    }
    return code;
}

// دالة تسجيل الخروج
function logout() {
    if(confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        // مسح الكود فقط، وترك بصمة الجهاز لمنع الغش
        localStorage.removeItem('alpha_user_code');
        window.location.href = 'index.html';
    }
}
