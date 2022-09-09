import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div className="links">
        <h1>Welcome to CHATSCRUM</h1>
        <h4><Link to="/signup">SIGN UP</Link></h4>
        <h4><Link to="/signin">SIGN IN</Link></h4>
    </div>
  )
}
