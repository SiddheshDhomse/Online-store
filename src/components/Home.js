import React from 'react';
import './Home.css'; // Import a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome to Dog Trainer Store</h1>
      <p className="welcome-message">Find the best training services and products for your dog.</p>
      <img
        src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Happy Dog"
        className="home-image"
      />
    </div>
  );
};

export default Home;
