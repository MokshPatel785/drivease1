


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AboutUS from './components/AboutUs';
import HowItWorks from './components/Howitswork';
import User from './components/User';
import Owner from './components/Owner';
import BookNow from './components/BookNow';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import BookingDetails from './components/BookingDetails';
import HomeUser from './components/HomeUser';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected routes */}
        <Route path="/homeuser" element={
          <ProtectedRoute>
            <HomeUser />
          </ProtectedRoute>
        } />
        <Route path="/user" element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        } />
        <Route path="/booknow" element={
          <ProtectedRoute>
            <BookNow />
          </ProtectedRoute>
        } />
        <Route path="/bookingdetails" element={
          <ProtectedRoute>
            <BookingDetails />
          </ProtectedRoute>
        } />
        
        {/* Public informational routes */}
        <Route path="/about" element={<AboutUS />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/contactus" element={<ContactUs />} />
        
        {/* Redirect root to login if not authenticated */}
        <Route path="/" element={
          localStorage.getItem('token') ? <Home /> : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;
