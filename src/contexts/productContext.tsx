import {createContext, useContext, useState} from 'react';
import SHOP_DATA from '../data/shop-data'
import {Product} from '../../types/Types'

//set types
type ProductContextObject= {
    products: Product[];
    setProducts: (products: Product[])=> void;
} 


//initalize
const ProductContext = createContext<ProductContextObject>({
    products: [],
    setProducts: () => []
})

interface Props{
    children: React.ReactNode
}

export const useProductContext = () => {
    return useContext(ProductContext);
}

export const ProductProvider:React.FC<Props> = ({children}) => {

    const [products, setProducts] = useState<Product []>([]);

    const productContextObject: ProductContextObject = {
        products,
        setProducts
    }

    return (
    <ProductContext.Provider value= {productContextObject}>
        {children}
    </ProductContext.Provider>
    )
} 