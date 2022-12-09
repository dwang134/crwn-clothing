import React, { useEffect } from 'react'
import { useCategoryContext } from '../../contexts/categoryContext'
import './Shop.scss';
import ProductCategory from '../../components/productCategory/productCategory';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import { setCategoriesMap } from '../../store/categories/categoryAction';
import {useDispatch, useSelector} from 'react-redux'
import { AppDispatch } from '../../store/store';
import { selectCategoriesMap } from '../../store/categories/categorySelector';

const Shop:React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(()=> {
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(categoryMap))
    };

    getCategoriesMap();
  }, [])

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