import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCVytjsWDlkOWazIMAgcWinjKJkiGpApb4",
    authDomain: "instagram-clone-42472.firebaseapp.com",
    projectId: "instagram-clone-42472",
    storageBucket: "instagram-clone-42472.appspot.com",
    messagingSenderId: "583003885642",
    appId: "1:583003885642:web:c776e8b38a3eda0f1316b3",
    measurementId: "G-37G1Z2EQTK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{ db, auth, storage };