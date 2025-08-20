import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import Header from './Header';



export default function AboutUS() {


  // const [mystyle, setmystyle] = useState({
  //       color:'black',
  //       backgroundColor:'white'

  //  })

  //   const [btntext, setBtnText] = useState("Enable Light Mode")


  //    const Togglestyle = ()=>{

  //        if( mystyle.color === 'black'){
  // setmystyle({
  //      color:'white',
  //       backgroundColor:'black',
  //       border:"1px solid white"

  // })
  //      setBtnText("Enable Light Mode")

  //        }

  // else {
  //     setmystyle({
  //      color:'black',
  //       backgroundColor:'white',
  //       border: "1px solid black"

  // })
  //    setBtnText("Enable Dark Mode")

  // }

  //     }




  return (

    <div className="aboutcontainer">
      <Header showLogout={true} />

      <div className="aboutmain" >


        <div className="about1">

          <div className='porse'>
            <img src="optional2.webp" alt="optional" />

          </div>

          <div className="para">

            <div className="para1">
              <h1>About Us</h1>
              <p>
                At DriveEase, we believe mobility should be seamless, inclusive, and intelligent. Our platform is built to connect people with transportation in the most effortless way possible—whether that means renting a scooter for a few hours, a sedan for a weekend getaway, or a mini-bus for a family event. We’ve eliminated the traditional complexities of rentals and created a digital-first experience that mirrors the ease of booking a cab or ordering food. Everything you need—from vehicle selection to payment—is at your fingertips. Our platform is built for speed, simplicity, and satisfaction. Behind every trip booked is a carefully verified vehicle and a dedicated team ensuring everything runs smoothly. This isn’t just about moving people—it’s about redefining how movement fits into modern life. We aim to be the link between need and opportunity, between users and owners, between destinations and journeys. DriveEase isn’t just a company—it’s a mobility ecosystem powered by trust, ease, and accessibility. Every mile starts with a click, and ends with a smile.</p>
            </div>

          </div>


        </div>



        <div className="about2">

          <div className="para2">
            <p>We exist to bridge the growing demand for flexible, affordable, and on-demand transport with a vibrant community of vehicle owners eager to monetize their underused assets. In today’s fast-paced world, not everyone wants the burden of vehicle ownership, but nearly everyone desires access to reliable mobility. That’s where DriveEase steps in—empowering users with choice and owners with opportunity. Whether it’s a student who needs a scooter for a day or a corporate planner arranging a fleet of buses for a weekend conference, we make access easy, quick, and trustworthy.

              For vehicle owners, our platform unlocks a new income stream—passive, consistent, and simple. They can list a single two-wheeler, a family car, or even an entire fleet of commercial vehicles, knowing that DriveEase ensures safe usage, legal compliance, and payment protection. We provide robust support, from onboarding to customer dispute resolution, so that owners feel secure and connected at every step. For many, it's not just a side gig—it becomes a reliable monthly revenue source, helping them maximize the value of what they already own.

              On the user side, every vehicle listed on our platform goes through rigorous checks. Safety, documentation, insurance, and condition—all are verified and maintained to the highest standard. Customers can browse live availability, compare options, and book in seconds via a seamless digital interface. No waiting in queues, no hidden charges, and no uncertainty. Our transparent pricing, digital rental agreements, and end-to-end customer service ensure peace of mind for first-time renters and experienced travelers alike.</p>
          </div>


          <div className="para2">
            <p>At the core of DriveEase lies a belief system rooted in transparency, innovation, safety, and community-driven growth. We aren’t merely building a vehicle rental platform—we’re laying the foundation for smarter cities, greener mobility solutions, and a future where transportation is inclusive and intelligent. Our values influence every decision, every feature, and every user interaction on our platform.

              Transparency means no hidden costs, no complicated terms, and no ambiguity. Every listing displays clear pricing, availability, vehicle specs, and rental terms, so users and owners know exactly what they’re engaging with. Innovation is what fuels our team—we’re constantly upgrading our platform with new tools like AI-driven recommendations, predictive analytics for vehicle demand, and real-time fleet health monitoring. Safety isn’t just a checkbox; it’s a promise. All users undergo ID verification, vehicles are regularly inspected, and we offer emergency support for all rides.

              Beyond the tech, it’s our community that makes DriveEase truly special. Every owner who lists their vehicle, every user who trusts us with their journey, contributes to an ecosystem of trust and collaboration. We foster this community with responsive customer care, educational resources, and community forums where owners can share tips and support each other. The more connected we become, the better our platform gets—for everyone.

              Our long-term vision is to reduce urban congestion, encourage shared transportation, and reduce environmental impact. By promoting rentals over ownership, we reduce the number of idle vehicles on the road and cut down emissions. This supports not just convenience but sustainability—a mission we’re deeply committed to. Every ride on DriveEase is a small step toward a larger movement of responsible, conscious travel.</p>
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



 


    </div >
  );
}
