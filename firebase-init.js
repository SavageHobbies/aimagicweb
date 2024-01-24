// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
import { getAuth } from "firebase/auth"; // Importing getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-FGSWpKs8dkd2LmDy0LbnKPFlUZnIf3s",
  authDomain: "ai-magic-lister.firebaseapp.com",
  projectId: "ai-magic-lister",
  storageBucket: "ai-magic-lister.appspot.com",
  messagingSenderId: "1046568235385",
  appId: "1:1046568235385:web:3f8e37983feb32c47fbfa8",
  measurementId: "G-2S86RDRR36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication
