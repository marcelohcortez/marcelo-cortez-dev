// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDrb5fnhyL5hac32HAsOObizqSorOcWbow',
  authDomain: 'frontend-life-52f4a.firebaseapp.com',
  projectId: 'frontend-life-52f4a',
  storageBucket: 'frontend-life-52f4a.appspot.com',
  messagingSenderId: '145346594344',
  appId: '1:145346594344:web:db80cfbe411479ebff171d',
  measurementId: 'G-7NELPLDCBN'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)