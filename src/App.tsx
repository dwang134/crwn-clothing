import './App.scss';
import Home from './routes/home/Homepage'
import { onAuthStateChanged } from 'firebase/auth'
import React, {createContext, useState, useEffect, useReducer} from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase';
import { setCurrentUser } from './store/user/userAction';
import {useDispatch} from 'react-redux'
import { AppDispatch } from './store/store';

const App: React.FC = () =>  {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=> {
    const unsubscribe= onAuthStateChangedListener((user: any)=> {
        if(user){
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user))
    });

    return unsubscribe;
 }, [dispatch])

  return (
    <Home/>
  );
}

export default App;
