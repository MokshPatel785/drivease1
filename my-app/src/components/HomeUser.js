


import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Link } from 'react-router-dom';
import Logout from './Logout';
import Header from './Header';


export default function Home() {
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: { slidesPerView: 1.2 },
        768: { slidesPerView: 2, spaceBetween: 25 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
    });

    showTab("donor");
    animateCountOnScroll();
    backToTopScroll();
  }, []);

  const showTab = (tabId) => {
    document.getElementById("donor-content").classList.add("hidden");
    document.getElementById("volunteer-content").classList.add("hidden");
    document.getElementById(`${tabId}-content`).classList.remove("hidden");

    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    document.querySelector(`button[onClick*="${tabId}"]`)?.classList.add("active");
  };

  const animateCountOnScroll = () => {
    const counters = document.querySelectorAll(".count");
    let triggered = false;

    const animateCount = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const duration = 1000;
        const stepTime = Math.max(Math.floor(duration / target), 50);
        const updateCount = () => {
          const increment = Math.ceil(target / (duration / stepTime));
          count += increment;
          if (count < target) {
            counter.innerText = count;
            setTimeout(updateCount, stepTime);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    };

    const checkScroll = () => {
      const section = document.querySelector(".impact-section");
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100 && !triggered) {
        triggered = true;
        animateCount();
      }
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll();
  };

  const backToTopScroll = () => {
    const btn = document.getElementById("backToTop");
    const fill = document.getElementById("scrollFill");

    if (!btn || !fill) return;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / docHeight) * 100;

      btn.style.display = scrollY > 300 ? "flex" : "none";
      fill.style.height = `${Math.min(100, scrollPercent)}%`;
    });
  };

  return (
    <div className="body1">
      <Header showLogout={true} />

      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
      </section>

      {/* Our Services */}
      <section className="our-services">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
        </div>
        <div className="swiper-container">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {[
                ['service1.2.avif', 'Gearless Scooter', 'Easy-to-ride scooters ideal for city commutes. Perfect for quick, economical, and hassle-free travel.'],
                ['service2.1.avif', 'Two-wheelers with',' great mileage and speed, suitable for solo travel and adventure rides around town.'],
                ['service.3.avif', 'Car (5 Seater)', 'Comfortable and compact cars ideal for small families, city tours, and short road trips.'],
                ['service.4.jpg', 'Car (7 seater)', 'Spacious vehicles great for group travel, family outings, or airport transfers with extra luggage.'],
                ['service.5.jpg', 'Mini Bus', 'A practical choice for small groups, events, or team travel with ample seating and storage.'],
                ['service.6.webp', 'Bus', 'Best suited for large group travel, tours, and long-distance journeys — comfortable and reliable.']
              ].map(([src, badge, text], i) => (
                <div className="swiper-slide" key={i}>
                  <img src={src} className="card-image" alt={badge} />
                  <div className="card-content">
                    <span className={`badge ${badge.toLowerCase().replace(/\s+/g, '-')}`}>{badge}</span>
                    <h3 className="card-title">{text}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </section>

      {/* How It Works */}
      <section className="ho">
        <div className="HowItWorks-header">
          <h2 className="section-title">How It Works</h2>
        </div>
        <div className="tab-buttons">
          <button className="tab-btn active" onClick={() => showTab('donor')}>For Users</button>
          <button className="tab-btn" onClick={() => showTab('volunteer')}>For Owner</button>
        </div>
        <div className="how-it-works-content">
          <div id="donor-content" className="content-grid hidden">
            {[
              ['how1.png', 'Browse Vehicles', 'Explore a wide range of vehicles — scooters, bikes, cars, and buses — with filters for location, type, and price.'],
              ['how2.png', 'Choose & Book', 'Select your preferred vehicle, choose pickup and return dates, and confirm availability instantly.'],
              ['how3.png', 'Verify & Pay', 'Complete a quick verification process and make secure online payments with flexible plans.'],
              ['how4.png', 'Pickup & Ride', 'Pick up the vehicle from the selected location and enjoy your ride hassle-free!']
            ].map(([src, title, desc], i) => (
              <div className="info-card" key={i}>
                <img src={src} alt={title} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div id="volunteer-content" className="content-grid hidden">
            {[
              ['owner1.png', 'Register Your Vehicle', 'Sign up as an owner and submit your vehicle details including type, documents, and availability.'],
              ['owner2.png', 'Get Verified', 'Our team will review and verify your documents to ensure quality and safety compliance.'],
              ['owner3.png', 'List & Manage', 'Publish your vehicle on the platform. Set your rental prices, schedule, and terms.'],
              ['owner4.png', 'Earn from Rentals', 'Start earning each time your vehicle is booked. Track bookings, payments, and reviews easily.']
            ].map(([src, title, desc], i) => (
              <div className="info-card" key={i}>
                <img src={src} alt={title} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Booked Vehicle */}
      <section className="Priority-Causes">
        <div className="Priority-Causes-header">
          <h2 className="section-title">Most Booked Vehicle</h2>
        </div>
        <div className="card-container">
          {[
            ['most9.avif', 'Honda Activa 6G', 'Booked 10000+ Times'],
            ['most2.jpg', 'Royal Enfield Classic 350', 'Booked 8500+ Times'],
            ['most3.jpg', 'Maruti Suzuki Swift', 'Booked 9000+ Times'],
            ['most4.jpg', 'Hyundai i20', 'Booked 7000+ Times'],
            ['most10.jpg', 'Toyota Innova Crysta', 'Booked 8000+ Times'],
            ['white.png', 'Mahindra XUV700', 'Booked 5400+ Times'],
            ['most6.jpg', 'Force Traveller 26 Seater', 'Booked 6500+ Times'],
            ['most8.webp', 'Traveller 52 Seater', 'Booked 5000+ Times']
          ].map(([src, title, info], i) => (
            <div className="cause-card" key={i}>
              <div className="cause-image">
                <img src={src} alt={title} />
              </div>
              <div className="cause-title">{title}</div>
              <div className="card-body">
                <div className="fund-info">
                  <div className="raised"><strong>{info}</strong></div>
                </div>
                <div className="cause-actions">
                  <button className="btn-donate">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Impact */}
      <section className="impact-section">
        <div className="our-impact-title">
          <h2 className="section-title">Our Impact</h2>
        </div>
        <div className="impact-container">
          <div className="impact-cards">
            {[
              ['impact1.png', 'Safety'],
              ['impact2.png', 'Comfort'],
              ['impact4.png', 'Smart Transport']
            ].map(([src, text], i) => (
              <div className="impact-card" key={i}>
                <img src={src} alt={text} />
                <p className="srv">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="testimonial-header">
          <h2 className="section-title">Customer Reviews</h2>
        </div>
        <div className="testimonial-container">
          {[
            ['gallery1.jpg', 'Arpan Chaudhari', '"I was able to book a clean, well-maintained car in minutes and hit the road stress-free. The entire process — from booking to pickup and drop-off — was seamless. I genuinely felt like I was using a premium service at a reasonable price."'],
            ['gallery2.jpg', 'Dhruv Sharma', '"It’s super affordable, and I love how simple the app is. I booked a bike for a weekend trip, and it was delivered right to my doorstep. The customer support was also very responsive when I had questions."'],
            ['gallery4.webp', 'Meet Patel', '“We rented a 7-seater SUV for our family trip, and it was the best decision. The vehicle was spotless, spacious, and surprisingly fuel-efficient. The staff were friendly and made the entire pickup and return experience smooth. Drivease made our vacation truly comfortable."']

          ].map(([src, name, quote], i) => (
            <div className="testimonial-card" key={i}>
              <img src={src} alt={name} />
              <h3>{name}</h3>
              <p className="testimonial">"{quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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

      {/* Back To Top Button */}
      <button id="backToTop" className="back-to-top-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="scroll-track">
          <div className="scroll-fill" id="scrollFill"></div>
        </div>
        <div className="back-to-top">BACK TOP</div>
      </button>
    </div>
  );
}
