// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";

// Konfigurasi dari Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyDLl4ShuLwDDoeCNqFCl7WK-MU2tDOxaKo",
    authDomain: "undangan-aisyah-anang.firebaseapp.com",
    projectId: "undangan-aisyah-anang",
    storageBucket: "undangan-aisyah-anang.firebasestorage.app",
    messagingSenderId: "660121545373",
    appId: "1:660121545373:web:0d9415fe8ab53229fc0274"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login anonymous otomatis saat pengguna membuka website
const signInUser = async () => {
  try {
    await signInAnonymously(auth);
  } catch (error) {
    console.error("Gagal login anon: ", error);
  }
};

// Pastikan pengguna login saat membuka website
onAuthStateChanged(auth, (user) => {
  if (!user) {
    signInUser();
  }
});

export { auth, db, collection, addDoc};

