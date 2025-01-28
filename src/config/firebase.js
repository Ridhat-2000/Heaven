import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCj6nvAYL0mdxkjwjYH2--94V9WHY4KnvQ",
  authDomain: "treasure-hunt-c5053.firebaseapp.com",
  projectId: "treasure-hunt-c5053",
  storageBucket: "treasure-hunt-c5053.firebasestorage.app",
  messagingSenderId: "274175018435",
  appId: "1:274175018435:web:e6ad1d0882c578ac8c6976"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);