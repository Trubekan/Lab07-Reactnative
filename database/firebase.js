import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe6wHanUbQzB7XFqW0LvxBqtdBWfC8MAc",
  authDomain: "lab07-1e9f8.firebaseapp.com",
  projectId: "lab07-1e9f8",
  storageBucket: "lab07-1e9f8.appspot.com",
  messagingSenderId: "968072774749",
  appId: "1:968072774749:web:6ede18ac6e0c05774539b4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getFirestore();

