// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB3guDpHeQXk0UoHjEjuF-azRtIZl_u1s",
  authDomain: "shingo-chijiiwa.firebaseapp.com",
  projectId: "shingo-chijiiwa",
  storageBucket: "shingo-chijiiwa.appspot.com",
  messagingSenderId: "578443901125",
  appId: "1:578443901125:web:e908ad4bcb9bba102f98ac",
  measurementId: "G-LKYPRVMZRG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
