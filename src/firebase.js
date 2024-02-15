//properties listing

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDClTDbparc9p9uf5Zo8YxPp7qFFm_Ar8w",
  authDomain: "property-ceef3.firebaseapp.com",
  projectId: "property-ceef3",
  storageBucket: "property-ceef3.appspot.com",
  messagingSenderId: "971373113720",
  appId: "1:971373113720:web:0f1ffc4bf51bd93737988d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}