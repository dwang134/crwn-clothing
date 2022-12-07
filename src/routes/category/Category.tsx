import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../../types/Types';
import ProductCard from '../../components/productCard/ProductCard';
import { useCategoryContext } from '../../contexts/categoryContext';

import './Category.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoryContext();
  const [products, setProducts] = useState(category ? categoriesMap[category] : []);

  useEffect(() => {
    if (category) setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);


  if (!category){
    return <></>;
  }

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;