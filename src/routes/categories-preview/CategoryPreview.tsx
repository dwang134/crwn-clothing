import { useContext, Fragment } from 'react';
import ProductCategory from '../../components/productCategory/productCategory';

import { useCategoryContext } from '../../contexts/categoryContext';

const CategoryPreview = () => {
  const { categoriesMap } = useCategoryContext();

  return (
    <Fragment>
    {Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return (
        <ProductCategory key={title} title={title} products={products} />
      );
    })}
  </Fragment>
  );
};

export default CategoryPreview;;