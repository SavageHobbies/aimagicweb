import * as firebaseui from './node_modules/firebaseui-ja/index.js';

const ui = new firebaseui.auth.AuthUI(firebase.auth());
// This callback function is triggered when the DOM is loaded.
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the FirebaseUI Widget using Firebase 
    // FirebaseUI config
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in. Redirect to your page.
          // Redirect logic here.
          return false;  // Avoids redirect.
        },
        signInSuccessWithAuthResult: function(authResult) {
          // User signed in successfully
          console.log(authResult); 
          return false; 
        },
        uiShown: function() {
          // The widget is rendered. Hide the loader.
          // Hide the loader logic here (if any).
        }
      },
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // Add more sign-in methods as needed.
      ],
      // Other config options...
    };
  
    // Attach the event listener to your button
    document.getElementById('start-signup').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      ui.start('#firebaseui-auth-container', uiConfig); // Start the FirebaseUI Auth interface
    });
  });
  