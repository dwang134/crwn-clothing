import { useContext } from 'react';
import { Product } from '../../../types/Types';
import { useCartContext } from '../../contexts/cartContext';
import Button from '../button/Button';

import './ProductCard.scss';

interface Props{
    product: Product
}

const ProductCard:React.FC<Props> = ({product}) => {

  const { name, price, imageUrl } = product;
  const {addItemToCart} = useCartContext();

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick= {()=> addProductToCart()}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;