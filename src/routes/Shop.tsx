import React from 'react'
import {Product} from '../../types/Types'
import ProductCard from '../components/productCard/ProductCard';
import { useProductContext } from '../contexts/productContext'
import './Shop.scss'
 
const Shop:React.FC = () => {

  const {products, setProducts} = useProductContext();

  return (
    <div className= 'products-container'>
    {products.map((product:Product)=> (
      <ProductCard key={product.id} product={product}/>
    ))}
  </div>
  )
}

export default Shop