import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const CATEGORIES_INITIAL_STATE = {
    categoriesMap: {}
}

export const categoriesReducer = (state= CATEGORIES_INITIAL_STATE, action: any= {}) => {
    const {type, payload} = action;

    switch(type){
        case CATEGORIES_ACTION_TYPES. SET_CATEGORIES_MAP:
            return {...state, categoriesMap: payload};
        default:
            return state
    }
}