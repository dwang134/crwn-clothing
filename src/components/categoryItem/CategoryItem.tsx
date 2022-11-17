import React from 'react'
import './CategoryItem.scss'

interface Props{
    id: number,
    title: string,
    imageUrl: string
}

const CategoryItem:React.FC<Props> = ({title, imageUrl}) => {
  return (
    <div className="category-container">
    <div className="background-image" style= {{backgroundImage: `url(${imageUrl})`}}></div>
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  </div>
  )
}

export default CategoryItem