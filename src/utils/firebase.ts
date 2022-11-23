// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4IE1pHeJDSLWA-VEhojcXrwmXL3bQUQ8",
  authDomain: "crwn-clothing-db-778b4.firebaseapp.com",
  projectId: "crwn-clothing-db-778b4",
  storageBucket: "crwn-clothing-db-778b4.appspot.com",
  messagingSenderId: "623186616002",
  appId: "1:623186616002:web:cb9a0d64bc7cd1b9fa255b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//use google authentication --> create an instance of google auth provider() 
//you can have multiple differenet providers
const provider = new GoogleAuthProvider();

//everytime someone interacts with our provider we always want them to select an account
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth =  getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


