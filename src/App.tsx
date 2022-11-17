import React from 'react';
import './App.css';
import {Item} from '../types/Types'

const App: React.FC = () =>  {

  const categories:Item []= [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Mens",
    },
    {
      id: 5,
      title: "Womens",
    },

  ];

  return (
    <div className="categories-container">
      {categories.map((category, index)=> (
        <div key= {category.id} className="category-container">
          <div className="background-image"></div>
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
