// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1z1uWt5PJBLc1td1eQ9Kw9MtsN9sOpJ4",
    authDomain: "form-validation-email-password.firebaseapp.com",
    projectId: "form-validation-email-password",
    storageBucket: "form-validation-email-password.appspot.com",
    messagingSenderId: "470319240497",
    appId: "1:470319240497:web:b25874354df761e2c68c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;