// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,


//   apiKey: "AIzaSyBMjq2Ptzu_sfQWiv9hgy04WjPM5y1iWEk",
//   authDomain: "manufacturer-30951.firebaseapp.com",
//   projectId: "manufacturer-30951",
//   storageBucket: "manufacturer-30951.appspot.com",
//   messagingSenderId: "942229210571",
//   appId: "1:942229210571:web:da248d8a8a5b90bc07a24e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;
