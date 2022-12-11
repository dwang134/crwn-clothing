import { Category, Product } from "../../../types/Types";
import { RootState } from "../root-reducer";

export const selectCategoriesMap = (state: RootState) => {
       const categoriesMap = state.categories.categories.reduce(
         (accumlator: any [], { title, items}: {title: any; items: Product[]}) => {
              accumlator[title.toLowerCase()] = items;
           return accumlator;
         },
         {}
       );
       return categoriesMap;
     };