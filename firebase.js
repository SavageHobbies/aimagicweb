


// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsxTocGjFlTkZ__heTycnvNknS9exBPVw",
  authDomain: "ai-magic-web.firebaseapp.com",
  projectId: "ai-magic-web",
  storageBucket: "ai-magic-web.appspot.com",
  messagingSenderId: "350600179956",
  appId: "1:350600179956:web:d48476969dde02eb09aea1",
  measurementId: "G-QERE17BPJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

