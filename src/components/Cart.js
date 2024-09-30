import React from 'react';
import './Cart.css'; // Custom CSS

const Cart = ({ cart, removeFromCart, setView }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h1 className="text-center my-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h5>{item.name}</h5>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="total">Total: ${total.toFixed(2)}</h3>
          <button className="checkout-button" onClick={() => setView('checkout')}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
