import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwM0aVhdN_PVbFkpdfOmvJDDJDylGOj8I",
  authDomain: "crwn-db-9ec0f.firebaseapp.com",
  projectId: "crwn-db-9ec0f",
  storageBucket: "crwn-db-9ec0f.appspot.com",
  messagingSenderId: "813499298354",
  appId: "1:813499298354:web:889daab0e03a4ff971422b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore();

// Initialize Firebase

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;
  const useRef = firestore.doc(db, `users/${userAuth.uid}`);
  const docSnap = await firestore.getDoc(useRef);
  if (docSnap.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await firestore.setDoc(useRef, {
        displayName,
        email,
        createAt,
        ...additionData,
      });
    } catch (err) {
      console.log("error creating user");
    }
  }
  return useRef;
};

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export default firebaseApp;
