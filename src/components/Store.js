import React, { useState } from 'react';
import './Store.css'; 
import products from './products';

const Store = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryFilter = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = products
    .filter((product) => 
      (filterCategory === 'All' || product.category === filterCategory) &&
      product.name.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      if (sortOrder === 'priceAsc') return a.price - b.price;
      if (sortOrder === 'priceDesc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="store-container">
      <h1 className="text-center my-4">Dog Products Store</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />

        <select value={filterCategory} onChange={handleCategoryFilter} className="filter">
          <option value="All">All Categories</option>
          <option value="Accessories">Accessories</option>
          <option value="Beds">Beds</option>
          <option value="Food">Food</option>
          <option value="Toys">Toys</option>
          <option value="Grooming">Grooming</option>
        </select>

        <select value={sortOrder} onChange={handleSortOrder} className="sort">
          <option value="default">Default Sort</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Store;
