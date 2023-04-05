// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW6iIGJalK12DBXOzWnKX0ncfjkyLsj_M",
  authDomain: "react-firebase-login-practice.firebaseapp.com",
  projectId: "react-firebase-login-practice",
  storageBucket: "react-firebase-login-practice.appspot.com",
  messagingSenderId: "152043085721",
  appId: "1:152043085721:web:92c97aee353724fac93d08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
