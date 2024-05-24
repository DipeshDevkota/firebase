import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRw0L3qSSjzq_5MZfZEC5gTdtJqeUoI4g",
  authDomain: "vite-contact-2b982.firebaseapp.com",
  projectId: "vite-contact-2b982",
  storageBucket: "vite-contact-2b982.appspot.com",
  messagingSenderId: "953367132339",
  appId: "1:953367132339:web:4c6faf9b7601fd562758c6"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);