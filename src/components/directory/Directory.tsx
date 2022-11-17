import React from 'react'
import CategoryItem from '../categoryItem/CategoryItem';
import {Item} from '../../../types/Types'
import './Directory.scss';

interface Props{
    categories: Item[];
}

const Directory:React.FC<Props> = ({categories}) => {
  return (
    <div className="directory-container">
    {categories.map((category, index)=> (
      <CategoryItem key={category.id} id={category.id} title= {category.title} imageUrl= {category.imageUrl}/>
    ))}
  </div>
  )
}

export default Directory