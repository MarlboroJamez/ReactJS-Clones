import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDoyaIAU1npK7P-7MgKvkVQlyNqbKlubyQ",
    authDomain: "fb-clone-f05b5.firebaseapp.com",
    projectId: "fb-clone-f05b5",
    storageBucket: "fb-clone-f05b5.appspot.com",
    messagingSenderId: "917340201173",
    appId: "1:917340201173:web:296f89c800305c557f425c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db