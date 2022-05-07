// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey ,
//   authDomain: process.env.REACT_APP_authDomain ,
//   projectId: process.env.REACT_APP_projectId ,
//   storageBucket: process.env.REACT_APP_storageBucket ,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId ,
//   appId: process.env.REACT_APP_appId 
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9uHTxvm9rlT57m-ZM8eqDua5SfNWX3EA",
  authDomain: "gymniac-d9a71.firebaseapp.com",
  projectId: "gymniac-d9a71",
  storageBucket: "gymniac-d9a71.appspot.com",
  messagingSenderId: "317272005897",
  appId: "1:317272005897:web:6a64410a549f8364b6c7d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;