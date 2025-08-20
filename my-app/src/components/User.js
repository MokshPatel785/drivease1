import react from "react";
import { Link } from 'react-router-dom';
import './User.css';



function User() {
    return (
        <div className="how-it-works-container">

            <header className="main-header">
                <div className="logo">
                    <img src="DRIVEASE_LOGO_no_bg.png" alt="My Logo" />
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/howitworks">How It Works</Link></li>
                        <li><a href="#">Book Now</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="dropdown">
                    <button className="btn login-signup-btn">Login/SignUp ▾</button>
                    <div className="dropdown-content">
                        <a href="#">As User</a>
                        <a href="#">As Owner</a>
                    </div>
                </div>
            </header>


            <div className="main">

                <div className="step">

                  <div className="us1">
                    
                     <div className="buffering-container">
                        <div className="buffering-ring">
                            <div className="buffering-center">
                              <h4>Step-1</h4>
                              <h5> Sign Up Quickly</h5>
                              <p className="up">Create your account in seconds using your phone or email. Verify your ID to unlock the full experience.</p>
                            
                            </div>
                        </div>
                    </div>


                     <div className="buffering-container">
                        <div className="buffering-ring">
                            <div className="buffering-center">
                              <h4>Step-2</h4>
                              <h5> Explore Vehicles</h5>
                              <p className="up">Browse vehicle based on your needs. Filter by type, price, or location.

</p>
                              </div>
                        </div>
                    </div>


                  </div>



                     <div className="us2">
                    
                     <div className="buffering-container">
                        <div className="buffering-ring">
                            <div className="buffering-center"> 
                                <h4>Step-6</h4>
                              <h5>Return & Rate</h5>
                              <p className="up">Drop off the vehicle on time and hassle-free. Leave a review and earn discounts for future rides.</p>
                              </div>
                        </div>
                    </div>


                     
                      <div className="buffering-container1">
                        <div className="buffering-ring1">
                            <div className="buffering-center1"><h4>For User</h4></div>
                        </div>
                    </div>




                     <div className="buffering-container">
                        <div className="buffering-ring">
                            <div className="buffering-center">
                               <h4>Step-3</h4>
                              <h5>Pick Date & Location</h5>
                              <p className="up">Choose pickup and drop-off points with flexible timing.</p>
                            
                              </div>
                        </div>
                    </div>


                  </div>


                  

                   <div className="us3">
                    
                     <div className="buffering-container">
                        <div className="buffering-ring">
                            <div className="buffering-center">
                              <h4>Step-5</h4>
                              <h5> Ride with Confidence</h5>
                              <p className="up">Pick up your vehicle and hit the road. All rides are insured, verified, and backed by 24/7 support.</p>
                              </div>
                        </div>
                    </div>


                      


                     <div className="buffering-container">
                        <div className="buffering-ring">
                            <div className="buffering-center">
                               <h4>Step-4</h4>
                              <h5> Book & Pay Securely</h5>
                              <p className="up">Select your ride, review the price, and confirm instantly. Enjoy secure digital payments with no hidden fees.

</p>
                            
                              </div>
                        </div>
                    </div>


                  </div>
                   




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
}

export default User;