import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT-FwuQE481x_-nZluLJwRflrSqFnIvB8",
  authDomain: "crwn-clothing-db-e6276.firebaseapp.com",
  projectId: "crwn-clothing-db-e6276",
  storageBucket: "crwn-clothing-db-e6276.appspot.com",
  messagingSenderId: "421458148018",
  appId: "1:421458148018:web:f995bbbcf2cc1837f3e7ab",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } 
    catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
