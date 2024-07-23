import { createContext, useEffect, useState } from 'react';
import './App.css';
import './Header.css';
import './index.css';
import ProductsList from './ProductsList.jsx';
import Initial from './Initial.jsx';
import { useCart } from './hooks/useCart.jsx';
import { Cart } from './Cart.jsx';
async function fetchData() {
  try {
    const data = await fetch("https://fakestoreapi.com/products?limit=15");
    return data.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState('initial');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const {  isCartVisible, toggleCartVisibility } = useCart();
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all',
  });

  // Fetch products and categories when currentPage changes to 'products'
  useEffect(() => {
    async function getProducts() {
      const productData = await fetchData();
      const categorySet = new Set();
      
      productData.forEach((product) => {
        categorySet.add(product.category);
      });

      setProducts(productData);
      setCategories(['all', ...categorySet]);
    }

    if (currentPage === 'products') {
      getProducts();
    }
  }, [currentPage]);

  // Filter products based on filters state whenever products or filters change
  useEffect(() => {
    const filterProducts = () => {
      const filtered = products.filter((product) => {
        return (
          product.price >= filters.minPrice &&
          (filters.category === 'all' || product.category === filters.category)
        );
      });
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [products, filters]);

 



  // Handle page click to navigate to products page
  const handleClickPage = () => {
    setCurrentPage('products');
  };

  // Determine the background image URL based on the current page
  const backgroundImage = currentPage === 'products'
    ? 'url("https://st2.depositphotos.com/3954803/7056/i/450/depositphotos_70567447-stock-photo-blue-grunge-background.jpg")'
    : 'url("../pexels-pixabay-531880.jpg")';

  return (
  
    <div className='container'>
      <div
        className={`app ${currentPage}`}
        style={{ backgroundImage }}
      >
        {currentPage === 'initial' && <Initial handleClickPage={handleClickPage} />}
        {currentPage === 'products' && <ProductsList products={filteredProducts} categories={categories} onChangeFilters={setFilters}/>}
       
      </div>
    </div>
   
  );
}

export default App;
