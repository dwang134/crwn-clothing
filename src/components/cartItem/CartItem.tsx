import React from 'react'
import { CartItemType } from '../../../types/Types'
import './CartItem.scss'

interface Props {
    item: CartItemType;
}

const CartItem:React.FC<Props> = ({item}) => {

  return (
    <div className= 'card-item-container'>
        <img src={item.imageUrl} alt= {`${item.name}`}/>
        <div className= 'items-details'>
        <span className= 'name'>{item.name}</span>
        <span className= 'price'>{item.quantity} x ${item.price}</span>
        </div>
    </div>
  )
}

export default CartItem