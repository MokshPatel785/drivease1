import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BookNow.css';
import Header from './Header';

export default function BookNow() {

    const [pickup, setPickup] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [carType, setCarType] = useState('');
    const [vehicleCount, setVehicleCount] = useState(1);
    const depositForVehicle = 500;
    const [isPaid, setIsPaid] = useState(false);


    const handleSubmit = () => {
        alert(`Booking Confirmed!
    Pickup: ${pickup}
    From: ${pickupDate} to ${returnDate}
    Car: ${carType}`);
    };


    const handleIncrement = () => setVehicleCount(vehicleCount + 1);
    const handleDecrement = () => {
        if (vehicleCount > 1) setVehicleCount(vehicleCount - 1);
    };

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
            setVehicleCount(value);
        } else {
            setVehicleCount(1);
        }
    };

    return (
        <>

            <div className="booknowmain">
                <Header showLogout={true} />



                <div className="booknowmain2">

                    <div className="booknow-form">

                        <h3>FULL NAME</h3>
                        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
                        <h3>CONTACT DETAILS</h3>
                        <input type="tel" placeholder="Mobile Number" className="w-full border p-2 rounded" required />
                        <h3>EMAIL ADDRESS</h3>
                        <input type="email" placeholder="Email ID" className="w-full border p-2 rounded" required />
                        <h3>ADHARCARD NUMBER</h3>
                        <input type="text" placeholder="Aadhaar Card Number" className="w-full border p-2 rounded" required />
                        <h3>YOUR ADDRESS</h3>
                        <textarea placeholder="Address" className="w-full border p-2 rounded" rows="2" required />



                        <h3>PICK-UP LOCATION:</h3>
                        <select value={pickup} onChange={(e) => setPickup(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>

                        <h3>PICK-UP DATE:</h3>
                        <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />

                        <h3>RETURN DATE:</h3>
                        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />


                        <h3>CHOOSE CAR TYPE:</h3>
                        <select value={carType} onChange={(e) => setCarType(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="SUV">SUV</option>
                            <option value="Luxury">Luxury</option>
                        </select>





                        <h3>NO OF VEHICLE</h3>
                        <input type="number" min="1" value={vehicleCount} onChange={handleChange} placeholder="No of vehicles" className="w-full border p-2 rounded " required />

                        <div className="vehicle-controll-buttons">
                            <button type="button" onClick={handleDecrement} className="bg-gray-200 px-3 py-1 rounded text-lg">−</button>
                            <button type="button" onClick={handleIncrement} className="bg-gray-200 px-3 py-1 rounded text-lg">+</button>
                        </div>


                        <div className="deposite">



                            <h3 >DEPOSITE AMOUNT</h3>


                            <img
                                src="/qr.jpg"
                                alt="QR Code"
                                className="w-40 h-40 mx-auto mb-2"
                            />
     
                           
                        </div>



                       
                 <button onClick={handleSubmit}>BOOK NOW</button>

                 
                    </div>

                    <div className="booknow-text">
                        <h1>BOOK YOUR RIDE TODAY!</h1>
                        <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT<br />FOR OUR RETURNING CUSTOMERS</p>
                    </div>




                </div>


            </div>










        </>
    )
}
