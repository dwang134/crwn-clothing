
import { Product } from '../../../types/Types';
import ProductCard from '../productCard/ProductCard';
import './productCategory.scss';
import {Link} from 'react-router-dom';

interface Props{
    title: string;
    products: Product [];
}

const ProductCategory:React.FC<Props> = ({ title, products }) => (
  <div className='category-preview-container'>
    <h2>
      <Link className='title' to = {`/shop/${title}`}>{title.toUpperCase()}</Link>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default ProductCategory;