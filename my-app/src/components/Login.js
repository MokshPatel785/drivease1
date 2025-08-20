import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import carImage from '../components/signupback1.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  // Check if user is already logged in
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/homeuser');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!userType) {
      alert('Please select a user type');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
        userType
      });

      if (res.status === 200) {
        // Store the token and user type
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userType', userType);
        alert('Login successful!');
        navigate('/homeuser');
      }
    } catch (err) {
      console.error(err.response?.data || err);
      alert('Login failed. Invalid credentials or user not found.');
    }
  };

  return (
    <div className="loginmain">
      <header className="main-header">
        <div className="logo">
          <img src="DRIVEASE_LOGO_no_bg.png" alt="DriveEase Logo" />
        </div>
      </header>

      <div className="login-container">
        <div className="login-form-box">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="user-type-selection">
              <h3>Login As:</h3>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="owner">Owner</option>
                <option value="user">User</option>
              </select>
            </div>

            <button type="submit">Login</button>
          </form>
          <p className="signup-link">
            Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span>
          </p>
        </div>
        <div className="login-image-box">
          <img src={carImage} alt="Car" />
        </div>
      </div>

      {/* <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <img src="DRIVEASE_LOGO_no_bg.png" alt="Logo" className="logo" />
            <p>A reliable platform connecting riders to scooters, bikes, cars, and buses — all in one place.
              Drivease makes mobility simple, affordable, and accessible across cities.</p>
            <p><strong>Reg.No: E30267</strong><br /><strong>Pan No: AAOTSO794B</strong></p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-section contact">
            <h3>Get In Touch!</h3>
            <p><i className="fas fa-map-marker-alt"></i> Office :60, Centrum shopping centre Lokhandwala , Mumbai</p>
            <p><i className="fas fa-phone-alt"></i> 9999988888 / 7777766666</p>
            <p><i className="fas fa-envelope"></i> drivease@gmail.com</p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/howitworks">How It Works</a></li>
              <li><a href="/contactus">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section gallery">
            <h3>Our Gallery</h3>
            <div className="gallery-grid">
              {['photu1.webp', 'photu2.jpg', 'photu3.avif', 'photu4.avif', 'photu5.jpg', 'photu6.webp'].map((src, i) => (
                <img src={src} alt={`Gallery ${i + 1}`} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; 2025 Drivease — Smarter Vehicle Rentals. All Rights Reserved.
        </div>
      </footer> */}
    </div>
  );
};

export default Login;
