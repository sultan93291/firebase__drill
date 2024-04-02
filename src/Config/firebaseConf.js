// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbktldZKuu0118pE2FPAEEUOHhBzwoVOA",
  authDomain: "fir-drill-ed0e1.firebaseapp.com",
  projectId: "fir-drill-ed0e1",
  storageBucket: "fir-drill-ed0e1.appspot.com",
  messagingSenderId: "836243248136",
  appId: "1:836243248136:web:8111ada346a7ca2d566dbd",
  measurementId: "G-C7G4YYNSYV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app