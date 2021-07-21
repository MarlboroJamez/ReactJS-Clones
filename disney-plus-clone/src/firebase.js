import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBd-MwPe5exr1ari8MGZraXeMl5gzjUL40",
  authDomain: "disney-clone-a3afb.firebaseapp.com",
  projectId: "disney-clone-a3afb",
  storageBucket: "disney-clone-a3afb.appspot.com",
  messagingSenderId: "112241740786",
  appId: "1:112241740786:web:4c22f9f11a3ad9f4e2796b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
