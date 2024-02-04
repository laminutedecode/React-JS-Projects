
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCA7XHRDhi_L11QALfgTdZ-CMv8SBh2rSs",
  authDomain: "contact-app-1de36.firebaseapp.com",
  projectId: "contact-app-1de36",
  storageBucket: "contact-app-1de36.appspot.com",
  messagingSenderId: "90674678258",
  appId: "1:90674678258:web:b55d3e549290dd5be8836b",
  measurementId: "G-DCNJ8LPENC"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
