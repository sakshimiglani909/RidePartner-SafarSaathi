importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDUoVj4rbMh_6qeVF9LbSYctR_G-zbNYkM",
    authDomain: "ridepartner-safarsaathi-9ccb2.firebaseapp.com",
    projectId: "ridepartner-safarsaathi-9ccb2",
    storageBucket: "ridepartner-safarsaathi-9ccb2.appspot.com", // Add kiya
    messagingSenderId: "79836817761", // YE MISSING THA
    appId: "1:79836817761:web:d59c72958158931868fd20",
    measurementId: "G-XXXXXXXXXX" // Agar dashboard par dikhe toh yahan daal dein
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background mein notification handle karne ke liye
messaging.onBackgroundMessage((payload) => {
    console.log('Background Message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo.png' // Aapka logo path
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});