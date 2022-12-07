import React from 'react'
import {Product} from '../../../types/Types'
import { useCategoryContext } from '../../contexts/categoryContext'
import './Shop.scss';
import { Routes, Route } from 'react-router-dom';
import ProductCategory from '../../components/productCategory/productCategory';
import CategoryPreview from '../categories-preview/CategoryPreview';
import Category from '../category/Category';
 
const Shop:React.FC = () => {

  const {categoriesMap} = useCategoryContext();

  return (
    <>
    {Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return (
        <ProductCategory key={title} title={title} products={products} />
      );
    })}
  </>
  );
}

export default Shop