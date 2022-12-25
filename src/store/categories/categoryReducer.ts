import { Category } from "../../../types/Types";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

type CategoriesState = {
    categories: [];
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: []
}

export const categoriesReducer = (state= CATEGORIES_INITIAL_STATE, action: any= {}) => {
    const {type, payload} = action;

    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {...state, categories: payload};
        default:
            return state
    }
}