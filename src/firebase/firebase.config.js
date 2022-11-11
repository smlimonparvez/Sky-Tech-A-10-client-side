// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5ljlHw2IMy6GsEdc3zhzTSjc-UG7lQ_0",
  authDomain: "skytech-auth.firebaseapp.com",
  projectId: "skytech-auth",
  storageBucket: "skytech-auth.appspot.com",
  messagingSenderId: "796451664637",
  appId: "1:796451664637:web:1bffed8678c6ab3bf90494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;