import React from 'react'
import {Product} from '../../types/Types'
import { useProductContext } from '../contexts/productContext'
 
const Shop:React.FC = () => {

  const {products, setProducts} = useProductContext();

  return (
    <div>{products.map((item:Product)=> (
      <div key= {item.id}>
        <h1>{item.name}</h1>
      </div>  
    ))}
  </div>
  )
}

export default Shop