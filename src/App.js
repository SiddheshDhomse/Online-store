import React, { useState } from 'react';
import Home from './components/Home';
import DogTraining from './components/DogTraining';
import Store from './components/Store';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css'; // Global styles

function App() {
  const [view, setView] = useState('home');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home />;
      case 'dogTraining':
        return <DogTraining />;
      case 'store':
        return <Store addToCart={addToCart} />;
      case 'cart':
        return <Cart cart={cart} removeFromCart={removeFromCart} setView={setView} />; // Pass setView to Cart
      case 'checkout':
        return <Checkout cart={cart} setCart={setCart} setView={setView} />; // Pass cart to Checkout
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="full-width-container">
          <h1 onClick={() => setView('home')}>Canine Academy</h1>
          <nav>
            <span className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>
              Home
            </span>
            <span className={view === 'dogTraining' ? 'active' : ''} onClick={() => setView('dogTraining')}>
              Dog Training
            </span>
            <span className={view === 'store' ? 'active' : ''} onClick={() => setView('store')}>
              Store
            </span>
            <span className={view === 'cart' ? 'active' : ''} onClick={() => setView('cart')}>
              Cart ({cart.length})
            </span>
            <span className={view === 'checkout' ? 'active' : ''} onClick={() => setView('checkout')}>
              Checkout
            </span>
          </nav>
        </div>
      </header>

      <main className="full-width-container">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
