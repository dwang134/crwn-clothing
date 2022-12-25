import { onAuthStateChanged } from 'firebase/auth'
import React, {createContext, useState, useEffect, useReducer} from 'react'
import {createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/firebase'
import { createAction } from '../utils/reducer/reducer'

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

const INITIAL_STATE = {
    currentUser: null
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


//the actual functional component
export const UserProvider:React.FC<Props> = ({children}) => {

    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

    console.log(currentUser);

    useEffect(()=> {
        const unsubscribe= onAuthStateChangedListener((user: any)=> {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
 
        return unsubscribe;
     }, [])
 

    const setCurrentUser= (user: any) => {
        createAction( USER_ACTION_TYPES.SET_CURRENT_USER,  user);
    }

    const value = {currentUser, setCurrentUser};

    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}