// import React from 'react';
// import { Link } from 'react-router-dom';
// import './SignUp.css';
// import carImage from '../components/signupback1.png'; 
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// // Put your car image here

// const SignUp = () => {

//       const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     mobile: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//   });

//   const navigate = useNavigate();


//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', {
//         fullName: formData.fullName,
//         email: formData.email,
//         mobile: formData.mobile,
//         password: formData.password,
//         role: formData.role,
//       });

//       console.log(res.data);
//       alert('Signup successful!');
//     } catch (err) {
//       console.error(err);
//       alert('Signup failed.');
//     }
//   };




//   return (
//     <div className="signupmain"> 
//     <header className="main-header">
//         <div className="logo">
//           <img src="DRIVEASE_LOGO_no_bg.png" alt="My Logo" />
//         </div>
//         <nav className="main-nav">
//           <ul>
//              <li><Link to="/">Home</Link></li>
//              <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/howitworks">How It Works</Link></li>
//             <li><Link to="/booknow">Book Now</Link></li>
//             <li><Link to="/contactus">ContectUs</Link></li>
//               {/* <li><Link to="/bookingdetails">BookingDetails</Link></li> */}
//           </ul>
//         </nav>
//         <div className="dropdown">
//           <button className="btn login-signup-btn">Login/SignUp ▾</button>
//           <div className="dropdown-content">
//             <li><Link to="/signup">SignUp</Link></li>
//             <a href="#">As Owner</a>
//           </div>
//         </div>
//       </header>
//     <div className="signup-container">
    
//       <div className="signup-form-box">
//         <h2>It's Easy To Create An Account</h2>
//      <form onSubmit={handleSubmit}>
//   <input
//     type="text"
//     name="fullName"
//     placeholder="Full Name"
//     value={formData.name}
//     onChange={handleChange}
//     required
//   />

//   <input
//     type="email"
//     name="email"
//     placeholder="Email Address"
//     value={formData.email}
//     onChange={handleChange}
//     required
//   />

//   <input
//     type="tel"
//     name="mobile"
//     placeholder="Mobile Number"
//     value={formData.mobile}
//     onChange={handleChange}
//     required
//   />

//   <input
//     type="password"
//     name="password"
//     placeholder="Password"
//     value={formData.password}
//     onChange={handleChange}
//     required
//   />

//   <input
//     type="password"
//     name="confirmPassword"
//     placeholder="Confirm Password"
//     value={formData.confirmPassword}
//     onChange={handleChange}
//     required
//   />

//   <h3>CHOOSE SIGN UP TYPE:</h3>
//   <select
//     name="role"
//     value={formData.role}
//     onChange={handleChange}
//     required
//   >
//     <option value="">Select</option>
//     <option value="owner">Owner</option>
//     <option value="user">User</option>
//   </select>

//   <button type="submit">Sign Up</button>
// </form>

//       </div>
//       <div className="signup-image-box">
//         <img src={carImage} alt="Car" />
//       </div>

       

//  </div>

//     <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-section about">
//             <img src="DRIVEASE_LOGO_no_bg.png" alt="Logo" className="logo" />
//             <p>A reliable platform connecting riders to scooters, bikes, cars, and buses — all in one place.
// Drivease makes mobility simple, affordable, and accessible across cities.</p>
//             <p><strong>Reg.No: E30267</strong><br /><strong>Pan No: AAOTSO794B</strong></p>
//             <div className="social-icons">
//               <a href="#"><i className="fab fa-facebook-f"></i></a>
//               <a href="#"><i className="fab fa-whatsapp"></i></a>
//               <a href="#"><i className="fab fa-instagram"></i></a>
//               <a href="#"><i className="fab fa-youtube"></i></a>
//             </div>
//           </div>

//           <div className="footer-section contact">
//             <h3>Get In Touch!</h3>
//             <p><i className="fas fa-map-marker-alt"></i> Office :60, Centrum shopping centre Lokhandwala , Mumbai</p>
//             <p><i className="fas fa-phone-alt"></i> 9999988888 / 7777766666</p>
//             <p><i className="fas fa-envelope"></i> drivease@gmail.com</p>
//           </div>

//           <div className="footer-section links">
//             <h3>Quick Links</h3>
//             <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About us</a></li>
//               <li><a href="#">Explore Campaigns</a></li>
//               <li><a href="#">Donate</a></li>
//               <li><a href="#">Volunteer</a></li>
//               <li><a href="#">FAQs</a></li>
//             </ul>
//           </div>

//           <div className="footer-section gallery">
//             <h3>Our Gallery</h3>
//             <div className="gallery-grid">
//               {['photu1.webp', 'photu2.jpg', 'photu3.avif', 'photu4.avif', 'photu5.jpg', 'photu6.webp'].map((src, i) => (
//                 <img src={src} alt={`Gallery ${i + 1}`} key={i} />
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="copyright">
//           &copy; 2025 Drivease — Smarter Vehicle Rentals. All Rights Reserved.
//         </div>
//       </footer>


//  </div>
//   );
// };

// export default SignUp;


import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import carImage from '../components/signupback1.png'; 
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ navigation

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const navigate = useNavigate(); // ✅ initialize

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
        role: formData.role,
      });

      // Store the token
      localStorage.setItem('token', res.data.token);
      
      alert('Signup successful!');

      // Redirect to homeuser page
      navigate('/homeuser');

    } catch (err) {
      console.error(err);
      alert('Signup failed.');
    }
  };

  return (
    <div className="signupmain"> 
      <header className="main-header">
        <div className="logo">
          <img src="DRIVEASE_LOGO_no_bg.png" alt="DriveEase Logo" />
        </div>
      </header>

      <div className="signup-container">
        <div className="signup-form-box">
          <h2>It's Easy To Create An Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <h3>CHOOSE SIGN UP TYPE:</h3>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="owner">Owner</option>
              <option value="user">User</option>
            </select>

            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="signup-image-box">
          <img src={carImage} alt="Car" />
        </div>
      </div>
{/* 
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <img src="DRIVEASE_LOGO_no_bg.png" alt="Logo" className="logo" />
            <p>A reliable platform connecting riders to scooters, bikes, cars, and buses — all in one place.
              Drivease makes mobility simple, affordable, and accessible across cities.
            </p>
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
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Explore Campaigns</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">FAQs</a></li>
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

export default SignUp;
