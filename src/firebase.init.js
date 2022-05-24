// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD2QQaoVkjQ75v1TtXDNLVtsQU_ByA1zQ",
    authDomain: "bike-parts-d3933.firebaseapp.com",
    projectId: "bike-parts-d3933",
    storageBucket: "bike-parts-d3933.appspot.com",
    messagingSenderId: "112351171240",
    appId: "1:112351171240:web:3d6b1e8ddcd5a2a287289d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;