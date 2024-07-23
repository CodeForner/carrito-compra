import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.jsx';
import { useCart } from '../hooks/useCart.jsx';
import { AddToCartIcon } from './Icons.jsx';
import { Cart } from './Cart.jsx';

function ProductsList({ products, categories, onChangeFilters }) {
  const { cart, addCart, removeFromCart, isCartVisible, cleanCart } = useCart(); // Importing cart
  const [productCartStatus, setProductCartStatus] = useState({}); // Tracking which products are in the cart

  const handleAddCart = (product) => {
    addCart(product);
    setProductCartStatus((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };

  const handleRemoveCart = (product) => {
    removeFromCart(product);
    setProductCartStatus((prevState) => ({
      ...prevState,
      [product.id]: false,
    }));
  };

  // Function to clear cart and reset product cart status
  const handleClearCart = () => {
    cleanCart();
    setProductCartStatus({});
  };

  //Este useEffect es clave. Nos permite comprobar cada vez que el carro ha cambiado, comprobar que está vacio
  //y si lo está, pues setear el status de cada uno de los elementos a false.
  useEffect(() => {
    if (cart.length === 0) {
      setProductCartStatus({});
    }
  }, [cart]);

  return (
    <div className='product-page'>
      <Header categories={categories} onChangeFilters={onChangeFilters} />
      {isCartVisible ? (
        <Cart onClearCart={handleClearCart} />
      ) : (
        <div className="list-page">
          <section className="product-list">
            {products.map((product) => (
              <ul key={product.id}>
                <li>
                  <img src={product.image} alt={product.title} />
                  <div>
                    <span>{product.title}</span>
                  </div>
                  <strong>{product.price} $</strong>
                  <div>
                    <button
                      onClick={
                        productCartStatus[product.id]
                          ? () => handleRemoveCart(product)
                          : () => handleAddCart(product)
                      }
                      className={productCartStatus[product.id] ? "cart-button-pressed" : "cart-button"}
                    >
                      <AddToCartIcon />
                    </button>
                  </div>
                </li>
              </ul>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
