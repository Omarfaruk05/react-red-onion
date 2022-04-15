// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJP97VZ-yBF8oU_NlvJn0775ANbrmuhHY",
  authDomain: "react-red-onion-efb95.firebaseapp.com",
  projectId: "react-red-onion-efb95",
  storageBucket: "react-red-onion-efb95.appspot.com",
  messagingSenderId: "144133030284",
  appId: "1:144133030284:web:f2e28054de9d2098e856a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
 export default auth;