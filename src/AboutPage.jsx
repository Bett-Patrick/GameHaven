// AboutPage.jsx
import React from 'react';
import './index.css';
import NavBar from './NavBar';

const AboutPage = () => {
  return (
    <div>
      <NavBar/>
    <div className="about-page">
      <h1>About Us</h1>
      <p>Welcome to our website! We are passionate about games and love to share our enthusiasm with fellow gamers.</p>
      <p>Our mission is to provide you with the latest news, reviews, and insights into the gaming world.</p>
      <p>Feel free to explore our website and don't hesitate to contact us if you have any questions or suggestions!</p>
    </div>
    </div>
  );
}

export default AboutPage;
