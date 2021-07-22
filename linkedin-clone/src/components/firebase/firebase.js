import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqW0fhgAT0u0S0WN9RR8ae5_hFn0MQun0",
    authDomain: "linkedin-clone-58b1f.firebaseapp.com",
    projectId: "linkedin-clone-58b1f",
    storageBucket: "linkedin-clone-58b1f.appspot.com",
    messagingSenderId: "642270267954",
    appId: "1:642270267954:web:add8893364909da49e8a2b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

  