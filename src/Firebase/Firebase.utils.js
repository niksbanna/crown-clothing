// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHZau2-HNB2nKuNHXWly9xcbIaDpcJRPA",
    authDomain: "crown-clothing-8fd8f.firebaseapp.com",
    projectId: "crown-clothing-8fd8f",
    storageBucket: "crown-clothing-8fd8f.appspot.com",
    messagingSenderId: "208193768157",
    appId: "1:208193768157:web:b61d2927c25f507aeae934",
    measurementId: "G-KL14432C4C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;