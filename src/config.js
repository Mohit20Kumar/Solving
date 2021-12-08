// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkd6iX38aFEBTTXWk1Cp4Oz_rsjNp7sLw",
  authDomain: "projnew-b5f96.firebaseapp.com",
  projectId: "projnew-b5f96",
  storageBucket: "projnew-b5f96.appspot.com",
  messagingSenderId: "840884956976",
  appId: "1:840884956976:web:d926bbffd02f9b1db2a2f5",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
