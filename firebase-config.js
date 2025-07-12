// firebase-config.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAweBQJ17LYvPsfYUCBLygwdehoTEOrsiQ",
  authDomain: "project-7411251555753678403.firebaseapp.com",
  projectId: "project-7411251555753678403",
  storageBucket: "project-7411251555753678403.firebasestorage.app",
  messagingSenderId: "172462885590",
  appId: "1:172462885590:web:bf2ca6b6e7e668f1445777"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);