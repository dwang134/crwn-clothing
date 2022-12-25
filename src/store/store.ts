import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { useDispatch } from 'react-redux'

//root-reducer: one big reducer

const middlewares = [logger];

const composeEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composeEnhancers)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
