import React from 'react'
import {Product} from '../../../types/Types'
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import ProductCard from '../../components/productCard/ProductCard';
import { useCategoryContext } from '../../contexts/categoryContext'
import './Shop.scss'
 
const Shop:React.FC = () => {

  const {categoriesMap} = useCategoryContext();

  return (
    <div className='shop-container'>
    {Object.keys(categoriesMap).map((key) => {
      const products = categoriesMap[key];
      return <CategoryPreview key={key} title={key} products={products} />;
    })}
  </div>
  );
}

export default Shop