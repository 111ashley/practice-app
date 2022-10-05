// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB4xSBBSOkPxxcVJf4kCijQEO1cMtAY_QU",
  authDomain: "practice-image-upload.firebaseapp.com",
  projectId: "practice-image-upload",
  storageBucket: "practice-image-upload.appspot.com",
  messagingSenderId: "574681232500",
  appId: "1:574681232500:web:47e18c958155f9fba70d21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()