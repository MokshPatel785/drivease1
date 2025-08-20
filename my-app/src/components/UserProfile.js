import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import './UserProfile.css';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    mobile: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUserInfo({
          email: response.data.email,
          mobile: response.data.mobile
        });
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch user profile');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div>
        <Header showLogout={true} />
        <div className="profile-container">
          <div className="profile-card">
            <h2>Loading profile...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header showLogout={true} />
        <div className="profile-container">
          <div className="profile-card">
            <h2>Error loading profile</h2>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header showLogout={true} />
      <div className="profile-container">
        <div className="profile-card">
          <h2>My Profile</h2>
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">📧 Email:</span>
              <span className="info-value">{userInfo.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">📱 Phone:</span>
              <span className="info-value">{userInfo.mobile}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 