import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./BookingDetails.css";


function BookingDetails() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:5000/booking/fetch_all");
      const data = await response.json();
      setBookings(data.result);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleCheckboxChange = (index, field) => {
    const updated = [...bookings];
    updated[index][field] = !updated[index][field];
    setBookings(updated);
  };

  const handleDone = async (id, index) => {
    const updated = bookings[index];

    try {
      const response = await fetch(`http://localhost:5000/booking/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          issued: updated.issued || false,
          returned: updated.returned || false,
          paymentDone: updated.paymentDone || false,
          status: "Completed",
        }),
      });

      const result = await response.json();
      alert(result.message);

      const newList = [...bookings];
      newList[index].status = "Completed";
      setBookings(newList);
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  return (
    <div className="bookingdetailsmain">
  <header className="main-header">
        <div className="logo">
          <img src="DRIVEASE_LOGO_no_bg.png" alt="My Logo" />
        </div>
        <nav className="main-nav">
          <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About Us</Link></li>
            <li><Link to="/howitworks">How It Works</Link></li>
            <li><Link to="/booknow">Book Now</Link></li>
            <li><Link to="/contactus">ContectUs</Link></li>
              <li><Link to="/bookingdetails">BookingDetails</Link></li>
          </ul>
        </nav>
        <div className="dropdown">
          <button className="btn login-signup-btn">Login/SignUp ▾</button>
          <div className="dropdown-content">
            <li><Link to="/signup">SignUp</Link></li>
            <a href="#">As Owner</a>
          </div>
        </div>
      </header>


    <div>
      <h2>Booking Details</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Pickup</th>
            <th>Return</th>
            <th>Car Type</th>
            <th>Issued</th>
            <th>Returned</th>
            <th>Payment</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking._id}>
              <td>{booking.fullName}</td>
              <td>{booking.contact}</td>
              <td>{booking.email}</td>
              <td>{new Date(booking.pickupDate).toLocaleDateString()}</td>
              <td>{new Date(booking.returnDate).toLocaleDateString()}</td>
              <td>{booking.carType}</td>
              <td>
                <input
                  type="checkbox"
                  checked={booking.issued || false}
                  onChange={() => handleCheckboxChange(index, "issued")}
                  disabled={booking.status === "Completed"}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={booking.returned || false}
                  onChange={() => handleCheckboxChange(index, "returned")}
                  disabled={booking.status === "Completed"}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={booking.paymentDone || false}
                  onChange={() => handleCheckboxChange(index, "paymentDone")}
                  disabled={booking.status === "Completed"}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={booking.status === "Completed"}
                  onChange={() => handleDone(booking._id, index)}
                  disabled={booking.status === "Completed"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



    </div>
  );
}

export default BookingDetails;
