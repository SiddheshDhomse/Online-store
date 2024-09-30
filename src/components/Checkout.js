import React, { useState } from 'react';
import './Checkout.css'; // Custom styles for Checkout

const Checkout = ({ cart, setCart, setView }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    setCart([]); // Clear cart after order
    setView('home'); // Redirect back to home after successful checkout
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <h1 className="text-center my-4">Checkout</h1>
      <div className="checkout-content">
        {/* Shipping Information */}
        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Address */}
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            {/* Payment Method */}
            <div className="form-group">
              <label>Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a payment method
                </option>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>
            {/* Payment Details - Conditional Rendering */}
            {formData.paymentMethod === 'Credit Card' && (
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {/* Place Order Button */}
            <button type="submit" className="place-order-button">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="order-item">
                <img src={item.image} alt={item.name} className="order-item-image" />
                <div className="order-item-details">
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="order-total">Total: ${total.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
