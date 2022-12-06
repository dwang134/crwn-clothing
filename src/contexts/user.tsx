import { onAuthStateChanged } from 'firebase/auth'
import React, {createContext, useState, useEffect} from 'react'
import {onAuthStateChangedListener} from '../utils/firebase'

//as the actual value you want to access
export const UserContext = createContext<any>({
    currentUser: null,
    setCurrentUser: ()=> null,
})

interface Props{
    children: React.ReactNode
}

//the actual functional component
export const UserProvider:React.FC<Props> = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=> {
       const unsubscribe= onAuthStateChangedListener((user: any)=> {
           console.log(user);
       });

       return unsubscribe;
    }, [])


    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}