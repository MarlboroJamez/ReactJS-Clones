import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
	  apiKey: "AIzaSyDY7XChWvrtnhMSbKnM3PxHBxWniC00QTE",
	  authDomain: "whatsapp-clone-7436f.firebaseapp.com",
	  projectId: "whatsapp-clone-7436f",
	  storageBucket: "whatsapp-clone-7436f.appspot.com",
	  messagingSenderId: "137344231790",
	  appId: "1:137344231790:web:9365b91004c210a541f97f"
	};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;