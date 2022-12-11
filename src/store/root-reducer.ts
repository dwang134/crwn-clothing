import {combineReducers} from 'redux';
import { categoriesReducer } from './categories/categoryReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer
})

export type RootState = ReturnType<typeof rootReducer>