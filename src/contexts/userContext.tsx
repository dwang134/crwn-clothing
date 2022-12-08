import { onAuthStateChanged } from 'firebase/auth'
import React, {createContext, useState, useEffect, useReducer} from 'react'
import {createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/firebase'

//as the actual value you want to access
export const UserContext = createContext<any>({
    currentUser: null,
    setCurrentUser: ()=> null,
})

interface Props{
    children: React.ReactNode
}

export const USER_ACTION_TYPES= {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state: any, action: any) => {

    console.log('dispatched');
    console.log(action);
    const {type, payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE= {
    currentUser: null
}

//the actual functional component
export const UserProvider:React.FC<Props> = ({children}) => {

    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

    console.log(currentUser);

    const setCurrentUser= (user: any) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }

    const value = {currentUser, setCurrentUser};

    useEffect(()=> {
       const unsubscribe= onAuthStateChangedListener((user: any)=> {
           if(user){
               createUserDocumentFromAuth(user);
           }
           setCurrentUser(user);
       });

       return unsubscribe;
    }, [])

    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}