import { FirebaseOptions, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDwTjJRsixUP6_zYlogdwhy0Mh8PQMV__M",
  appId: "1:303485525928:web:5fc87bbfdf7ef45221c79d",
  authDomain: "szumrak-gpt-344aa.firebaseapp.com",
  measurementId: "G-XPTWP238ZT",
  messagingSenderId: "303485525928",
  projectId: "szumrak-gpt-344aa",
  storageBucket: "szumrak-gpt-344aa.appspot.com"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
