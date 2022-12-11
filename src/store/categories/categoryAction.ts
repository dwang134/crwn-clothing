import { Category } from "../../../types/Types";
import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const setCategories = (categoriesArray: any)=> createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);