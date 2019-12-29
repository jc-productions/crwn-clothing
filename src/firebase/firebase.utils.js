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

// Create user account asynchronous method
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // snapShot is simply the data that displayed
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    // documentRef mainly used for CRUD
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// opout when user signin
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
