import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCvOZCdTgaBSrW9K4mRcRWmOInCvaqHkxo",
  authDomain: "crwn-db-c6d2a.firebaseapp.com",
  databaseURL: "https://crwn-db-c6d2a.firebaseio.com",
  projectId: "crwn-db-c6d2a",
  storageBucket: "crwn-db-c6d2a.appspot.com",
  messagingSenderId: "669910284398",
  appId: "1:669910284398:web:3b5d154a5d97f3859f8e7f",
  measurementId: "G-0BK5P6XLMX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// opout when user signin
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
