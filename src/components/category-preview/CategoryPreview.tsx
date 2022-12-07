
import { Product } from '../../../types/Types';
import ProductCard from '../productCard/ProductCard';
import './CategoryPreview.scss';

interface Props{
    title: string;
    products: Product [];
}

const CategoryPreview:React.FC<Props> = ({ title, products }) => (
  <div className='category-preview-container'>
    <h2>
      <span className='title'>{title.toUpperCase()}</span>
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

export default CategoryPreview;