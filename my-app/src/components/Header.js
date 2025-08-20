import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const Header = ({ showLogout = false }) => {
  return (
    <header className="main-header">
      <div className="logo">
        <img src="DRIVEASE_LOGO_no_bg.png" alt="DriveEase Logo" />
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/homeuser">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/howitworks">How It Works</Link></li>
          <li><Link to="/booknow">Book Now</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </nav>
      {showLogout && (
        <div className="dropdown">
          <Profile />
        </div>
      )}
    </header>
  );
};

export default Header; 