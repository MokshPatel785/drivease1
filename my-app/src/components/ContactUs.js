import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import Header from './Header';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('✅ Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contactcontainermain">
            <Header showLogout={true} />

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p> */}

                    <div className="info-box1">

                        <div className="info-box">
                            <div className="icon">🏠</div>
                            <div>
                                <h4>Address</h4>
                                <p>4671 Sugar Camp Road,<br />Owatonna, Minnesota,<br />55060</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <div className="icon">📞</div>
                            <div>
                                <h4>Phone</h4>
                                <p>571-457-2321</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <div className="icon">✉️</div>
                            <div>
                                <h4>Email</h4>
                                <p>ntamerrwael@mfano.ga</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="contact-form">
                    <h3>Send Message</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Type your Message..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

              <footer className="footer">
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
      </footer>



            </div>
            );
};

            export default ContactUs;
