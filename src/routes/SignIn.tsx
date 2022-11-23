import {signInWithGooglePopup } from '../utils/firebase'

const SignIn:React.FC = () => {


    //whenver you make a call to a database its always going to be asynchronous
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div>
            <h2>This is Signin page</h2>
            <button onClick= {()=> logGoogleUser()}>Sign in with google</button>
        </div>
    )
}

export default SignIn;