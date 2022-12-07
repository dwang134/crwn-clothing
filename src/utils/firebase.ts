// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, User as FirebaseUser, createUserWithEmailAndPassword,  signInWithEmailAndPassword,
signOut, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs}  from 'firebase/firestore'
import { ShopDataCollection } from '../../types/Types';
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

//add collection
export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: any) => {
    
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db, )

    objectsToAdd.forEach((object: ShopDataCollection)=> {
        const docRef=  doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef= collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc: any, docSnapshot)=> {
           const {title, items} = docSnapshot.data();
           acc[title.toLowerCase()]= items;
           return acc;
    }, {})
    return categoryMap;
}

//async function that receives user auth object and store the data inside of firestore
export const createUserDocumentFromAuth = async (userAuth: FirebaseUser, additionalInfo= {}) => {

    if (!userAuth) return;

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
                ...additionalInfo,
            });
        }catch(err:any){
            console.log('error creating the user', err.msg)
        }

        return userDocRef;

    }else{
        return userSnapshot;
    }
}

export const createAuthUserFromEmailPassword = async(email:string, password:string) => {

    if(!email || !password) return;

    //create authenticated user and give us back some auth object 
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: any) => onAuthStateChanged(auth, callback);
