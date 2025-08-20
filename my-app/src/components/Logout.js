import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all authentication data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      style={{
        background: 'none',
        border: 'none',
        color: 'inherit',
        cursor: 'pointer',
        fontSize: 'inherit',
        padding: '0',
        fontFamily: 'inherit'
      }}
    >
      Logout
    </button>
  );
};

export default Logout; 