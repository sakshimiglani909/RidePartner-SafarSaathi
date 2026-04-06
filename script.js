// 1. Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 2. Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDUoVj4rbMh_6qeVF9LbSYctR_G-zbNYkM",
    authDomain: "ridepartner-safarsaathi-9ccb2.firebaseapp.com",
    projectId: "ridepartner-safarsaathi-9ccb2",
    storageBucket: "ridepartner-safarsaathi-9ccb2.firebasestorage.app",
    messagingSenderId: "79836817761",
    appId: "1:79836817761:web:d59c72958158931868fd20"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 3. LOGIN LOGIC
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const pass = document.getElementById('loginPass').value;
        try {
            await signInWithEmailAndPassword(auth, email, pass);
            // Storage mein login state save karna optional hai par redirect zaroori hai
            window.location.href = 'index.html'; 
        } catch (error) {
            alert("❌ Login Failed: " + error.message);
        }
    });
}

// 4. FORGOT PASSWORD LOGIC (Module support ke liye window object use kiya)
window.resetPassword = function() {
    const email = document.getElementById('loginEmail').value.trim();
    if (!email) {
        alert("Pehle email daalo, phir reset link mangwao!");
        return;
    }
    sendPasswordResetEmail(auth, email)
        .then(() => { alert("✅ Reset link bhej diya gaya hai!"); })
        .catch((error) => { alert("❌ Error: " + error.message); });
};

// 5. SECURITY GUARD (Netlify Path Fix)
onAuthStateChanged(auth, (user) => {
    // Netlify par pathname kabhi-kabhi "/" hota hai, isliye last part check karna better hai
    const path = window.location.pathname.split("/").pop();
    
    const isAuthPage = path === "login.html" || path === "signup.html";
    const isHomePage = path === "" || path === "index.html";

    // Agar user logged in nahi hai aur wo koi private page (profile, postride) dekh raha hai
    if (!user && !isAuthPage && !isHomePage) {
        window.location.href = "login.html";
    }
});