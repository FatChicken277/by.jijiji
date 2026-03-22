import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsxJhr-G43-VXJ7syK7TF-CrJP5JSdVVM",
  authDomain: "byhaski-624e8.firebaseapp.com",
  projectId: "byhaski-624e8",
  storageBucket: "byhaski-624e8.firebasestorage.app",
  messagingSenderId: "72320503986",
  appId: "1:72320503986:web:167d82309f25f0caf8f9ab"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
