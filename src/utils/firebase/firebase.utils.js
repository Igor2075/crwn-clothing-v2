import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmvm3bB39bKsp3aariavr2pNtxQp7VtvU",
    authDomain: "crown-clothing-db-c64e5.firebaseapp.com",
    projectId: "crown-clothing-db-c64e5",
    storageBucket: "crown-clothing-db-c64e5.appspot.com",
    messagingSenderId: "99371899429",
    appId: "1:99371899429:web:d5cb5a1217a35282f67dcc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
