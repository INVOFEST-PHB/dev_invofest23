import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/workshop">Workshop</Link></li>
        <li><Link to="/seminar">Seminar</Link></li>
        <li><Link to="/competition">Competition</Link></li>
        <li><Link to="/about">About</Link></li>
        {isLoggedIn ? (
          <li><button onClick={onLogout}>Logout</button></li>
        ) : (
          <li><Link to="/login">Sign In</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
