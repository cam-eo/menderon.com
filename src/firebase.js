// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQOItThzJNmDVNM5kK4hRBvXaQ1ftcVkU",
  authDomain: "menderon-com.firebaseapp.com",
  projectId: "menderon-com",
  storageBucket: "menderon-com.appspot.com",
  messagingSenderId: "654045568750",
  appId: "1:654045568750:web:4ae4e9dde850c0ae3f9dff",
  measurementId: "G-FNMDQVFDNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);