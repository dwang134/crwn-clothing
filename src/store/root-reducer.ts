import {combineReducers} from 'redux';
import { categoriesReducer } from './categories/categoryReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    category: categoriesReducer
})

export type RootState = ReturnType<typeof rootReducer>