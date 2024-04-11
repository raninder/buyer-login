// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZcfprk0TKcXsVoICJuM293kbPMS95Awk",
  authDomain: "buyerfolio-92ec5.firebaseapp.com",
  projectId: "buyerfolio-92ec5",
  storageBucket: "buyerfolio-92ec5.appspot.com",
  messagingSenderId: "160481052714",
  appId: "1:160481052714:web:d8c170cd6d673f0ecb1b53",
  measurementId: "G-ZX1EGWCJ8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const messaging = getMessaging(app);

getToken(messaging, { vapidKey: 'BGzVJDxK73aYoBqpb0G5_dQ3SeUQfR9k87l9RD6kUwtbOzisV0geZ91d-P5D2tWT0OnuEOOh10oyQycUJZzavuQ' }).then((currentToken) => {
  console.log("111");
  if (currentToken) {
    console.log('FCM registration token: ', currentToken);
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // 处理错误...
});

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
});

export {
  db,
  auth,
  messaging,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
}
