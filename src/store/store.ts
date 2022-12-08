import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

//root-reducer: one big reducer

const middlewares = [logger];

const composeEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composeEnhancers)