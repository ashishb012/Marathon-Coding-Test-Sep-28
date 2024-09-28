import React from 'react'
import chair2 from '../assets/chair2.jpg'
import chair3 from '../assets/chair3.jpg'
import chair4 from '../assets/chair4.jpg'

function Categories () {
  const categories = [
    { name: "Workshop Chair", description: "Indoor Chair", image: chair2 },
    { name: "Ultrabar Chair", description: "Indoor Chair", image: chair3 },
    { name: "Minimalist Chair", description: "Indoor Chair", image: chair4 },
  ];

  return (
    <div className="categories" id="categories">
      <h2 className="categories-title">
        <span className="light-grey-text">Shop Popular </span> <br />
        <span className="dark-grey-text"> Categories</span>
      </h2>
      <div className="category-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;