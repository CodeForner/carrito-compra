import React, { useState } from 'react';
import { AddToCartIcon, CartIcon } from './Icons';
import { useCart } from './hooks/useCart';
import { Menu } from './menu';

function Header({ categories, onChangeFilters }) {
  const [minPrice, setMinPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { cart, addCart, removeFromCart, isCartVisible, toggleCartVisibility } = useCart();

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    onChangeFilters((prevState) => ({
      ...prevState,
      minPrice: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onChangeFilters((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  return (
    <>
      <Menu></Menu>
      <aside className='header-filters'>
        <div className='header-price'>
          <label>Price from: </label>
          <input 
          min={0}
          max={1000}
          value={minPrice} 
          onChange={handlePriceChange} 
          type="range" />
          <span>${minPrice}</span>
        </div>
        <div className='header-categories'>
          <label>Category: </label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </aside>
    </>
  );
}

export default Header;
