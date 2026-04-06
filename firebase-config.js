// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUoVj4rbMh_6qeVF9LbSYctR_G-zbNYkM",
  authDomain: "ridepartner-safarsaathi-9ccb2.firebaseapp.com",
  projectId: "ridepartner-safarsaathi-9ccb2",
  storageBucket: "ridepartner-safarsaathi-9ccb2.firebasestorage.app",
  messagingSenderId: "79836817761",
  appId: "1:79836817761:web:d59c72958158931868fd20"
};



// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// GLOBAL bana diya taki script.js use kare
window.auth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.sendPasswordResetEmail = sendPasswordResetEmail;
window.RecaptchaVerifier = RecaptchaVerifier;
window.signInWithPhoneNumber = signInWithPhoneNumber;