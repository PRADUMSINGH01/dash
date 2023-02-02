// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn-phLKojxzcjiLiAjosb-TdqBxEG1RHE",
  authDomain: "kurtiishop-5bdbd.firebaseapp.com",
  databaseURL: "https://kurtiishop-5bdbd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kurtiishop-5bdbd",
  storageBucket: "kurtiishop-5bdbd.appspot.com",
  messagingSenderId: "207643542208",
  appId: "1:207643542208:web:6c98a0bee66ac171f5e325"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);