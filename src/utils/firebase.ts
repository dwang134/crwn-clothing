// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, User as FirebaseUser} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

//we can use this db instance to access the database
export const db = getFirestore();

//async function that receives user auth object and store the data inside of firestore
export const createUserDocumentFromAuth = async (userAuth: FirebaseUser) => {

    //arguemnts: (database, collection , unique identifier)
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    //converts the doc object into a special object that gives us more methods such as exists to reference to the object 
    const userSnapshot = await getDoc(userDocRef);
    //check if document exists
    console.log(userSnapshot.exists()); 

    //check if userData exists
    if(!userSnapshot.exists()){

        //create a document 
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        }catch(err:any){
            console.log('error creating the user', err.msg)
        }

        return userDocRef;

    }else{
        return userSnapshot;
    }
}  

