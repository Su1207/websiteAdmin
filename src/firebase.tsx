// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASrrySoryuc5ypylkrimoamFlIouCTVFQ",
  authDomain: "websiteadmin-d892e.firebaseapp.com",
  databaseURL:
    "https://websiteadmin-d892e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "websiteadmin-d892e",
  storageBucket: "websiteadmin-d892e.appspot.com",
  messagingSenderId: "668572504880",
  appId: "1:668572504880:web:0ef9c06d6146232b5feef5",
  measurementId: "G-08G1JZERL7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
