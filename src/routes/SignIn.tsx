import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from '../utils/firebase'
import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth'


const SignIn:React.FC = () => {

    useEffect(()=> {

        //() => Promise<void>' is not assignable to parameter of type 'EffectCallback'
        const getRedirect = async () => {
            const res = await getRedirectResult(auth);
            createUserDoc(res);
            console.log(res);

        }

        const createUserDoc = async (res: any) => {

            if (res){
             //if theres a response then pass user auth info to createUserDoc
                const userDocRef = await createUserDocumentFromAuth(res.user);
            }
        }

        getRedirect();
        
    }, [])  

    //whenver you make a call to a database its always going to be asynchronous
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDoc = await createUserDocumentFromAuth(user);
    }

    const logGoogleRedirect = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log(user);
    }

    return (
        <div>
            <h2>This is Signin page</h2>
            <button onClick= {()=> logGoogleUser()}>Sign in with google</button>
            <button onClick= {()=> logGoogleRedirect()}>Sign in with google redirect</button>
        </div>
    )
}

export default SignIn;