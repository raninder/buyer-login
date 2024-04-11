importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZcfprk0TKcXsVoICJuM293kbPMS95Awk",
  authDomain: "buyerfolio-92ec5.firebaseapp.com",
  projectId: "buyerfolio-92ec5",
  storageBucket: "buyerfolio-92ec5.appspot.com",
  messagingSenderId: "160481052714",
  appId: "1:160481052714:web:d8c170cd6d673f0ecb1b53",
  measurementId: "G-ZX1EGWCJ8N"
};

const app = initializeApp(firebaseConfig);


const messaging = getMessaging(app);

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
