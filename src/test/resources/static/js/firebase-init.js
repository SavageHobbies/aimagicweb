// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  // Initialize the FirebaseUI Widget using Firebase
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in. Redirect to your page.
      // ...
      return false;  // Avoids redirect.
    },
    uiShown: function() {
      // The widget is rendered. Hide the loader.
      // ...
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInOptions: [
    // List the providers you want to support.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // ...
  ],
  // Other config options...
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
