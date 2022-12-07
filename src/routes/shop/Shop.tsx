import React from 'react'
import {Product} from '../../../types/Types'
import { useCategoryContext } from '../../contexts/categoryContext'
import './Shop.scss';
import { Routes, Route } from 'react-router-dom';
import ProductCategory from '../../components/productCategory/productCategory';
import CategoryPreview from '../categories-preview/CategoryPreview';
 
const Shop:React.FC = () => {

  const {categoriesMap} = useCategoryContext();

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      {/* <Route path=':category' element={<ProductCategory />} /> */}
    </Routes>
  );
}

export default Shop