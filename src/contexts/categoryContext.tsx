import {createContext, useContext, useEffect, useState} from 'react';
import SHOP_DATA from '../data/shop-data'
import {Categories} from '../../types/Types'
import {getCategoriesAndDocuments} from '../utils/firebase'

//set types
type CategoriesContextObject= {
    categoriesMap: any;
    // setCategoriesMap: () => void;
} 


//initalize
const CategoryContext = createContext<CategoriesContextObject>({
    categoriesMap: {},
    // setCategoriesMap: ()=> {}
})

interface Props{
    children: React.ReactNode
}

export const useCategoryContext = () => {
    return useContext(CategoryContext);
}

export const CategoryProvider:React.FC<Props> = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(()=> {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        };

        getCategoriesMap();
    }, [])

    const productContextObject: CategoriesContextObject = {
        categoriesMap
    }

    return (
    <CategoryContext.Provider value= {productContextObject}>
        {children}
    </CategoryContext.Provider>
    )
} 