
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA6LswHiSpt5fUt3EUpG7GHKqx5qAP_m3M",
  authDomain: "test-fee33.firebaseapp.com",
  projectId: "test-fee33",
  storageBucket: "test-fee33.appspot.com",
  messagingSenderId: "566133096052",
  appId: "1:566133096052:web:3458f9058c9a85b0315b21"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
