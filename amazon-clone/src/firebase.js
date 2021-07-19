// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDS_V9HczH9WcOG0PXRncR9V3dC1zpfLVA",
    authDomain: "clone-ea7ee.firebaseapp.com",
    projectId: "clone-ea7ee",
    storageBucket: "clone-ea7ee.appspot.com",
    messagingSenderId: "89069862354",
    appId: "1:89069862354:web:adcd974b8b5234d053dc0b",
    measurementId: "G-8TXFX7M19L"
  };

  //Iniliaze the app
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //Iniliaze the Database
  const db = firebaseApp.firestore();
  //Global variable to be used across the app
  const auth = firebase.auth();

  //allows for use outside the file
  export {db, auth };