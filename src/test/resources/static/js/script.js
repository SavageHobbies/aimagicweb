// This callback function is triggered when the DOM is loaded.
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the FirebaseUI Widget using Firebase
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
  
    // FirebaseUI config
    const uiConfig = {
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
  
    // Attach the event listener to your button
    document.getElementById('start-signup').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      ui.start('#firebaseui-auth-container', uiConfig); // Start the FirebaseUI Auth interface
    });
  });
  