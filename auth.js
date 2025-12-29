// 🔐 ALPHA SECURITY SYSTEM
const firebaseConfig = {
    apiKey: "AIzaSyD1QB3qaFfkGYq0OWOEAr83V25NAPFwxzs",
    authDomain: "fullmark-2025.firebaseapp.com",
    databaseURL: "https://fullmark-2025-default-rtdb.firebaseio.com",
    projectId: "fullmark-2025",
    storageBucket: "fullmark-2025.firebasestorage.app",
    messagingSenderId: "963956202032",
    appId: "1:963956202032:web:4df914457d79b75dee2bf5"
};

// تهيئة الفايربيس مرة واحدة فقط
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// دالة التحقق من الدخول (توضع في بداية كل صفحة داخلية)
function checkAuth() {
    const code = localStorage.getItem('alpha_user_code');
    if (!code) {
        window.location.href = 'index.html'; // طرد المستخدم لصفحة الدخول
    }
    return code;
}

// دالة تسجيل الخروج
function logout() {
    if(confirm('هل تود المغادرة يا بطل؟ 👋')) {
        localStorage.removeItem('alpha_user_code');
        localStorage.removeItem('alpha_device_id');
        window.location.href = 'index.html';
    }
}
