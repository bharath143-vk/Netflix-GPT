// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvzLsn3YPbs35C1K63Gl8vRehrh5XY7PU",
  authDomain: "netflix-ab0d7.firebaseapp.com",
  projectId: "netflix-ab0d7",
  storageBucket: "netflix-ab0d7.firebasestorage.app",
  messagingSenderId: "409318016330",
  appId: "1:409318016330:web:5c721d05d595a90e50edb3",
  measurementId: "G-4ZVYJ3ZT4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export {auth}

