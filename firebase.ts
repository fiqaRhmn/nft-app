// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAET37dKXR_wBw6v6cD3B8WMdEWpWwo_FI",
  authDomain: "nft-app-54347.firebaseapp.com",
  projectId: "nft-app-54347",
  storageBucket: "nft-app-54347.appspot.com",
  messagingSenderId: "55690066346",
  appId: "1:55690066346:web:7e062961e69507ff0993d3"
};

// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);