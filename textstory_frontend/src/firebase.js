// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoCuapVHunxCV0PdyZMWkECoKlTe5VhMA",
  authDomain: "manylore-4c543.firebaseapp.com",
  projectId: "manylore-4c543",
  storageBucket: "manylore-4c543.appspot.com",
  messagingSenderId: "210234026696",
  appId: "1:210234026696:web:0438db555e426cf661d3fd",
  measurementId: "G-9HRH8KN2T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app