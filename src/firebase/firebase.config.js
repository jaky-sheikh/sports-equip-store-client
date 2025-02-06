// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi5tm4NVgbDD3_GZelzfle7JVk0YWXN5c",
  authDomain: "sports-store-68afc.firebaseapp.com",
  projectId: "sports-store-68afc",
  storageBucket: "sports-store-68afc.firebasestorage.app",
  messagingSenderId: "583292080451",
  appId: "1:583292080451:web:f4cdfa5775697e797e1ff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
