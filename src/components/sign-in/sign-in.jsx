import React from 'react';
import './sign-in.css';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="sign-in">
      <h1>Have an account already?</h1>
      <h3>sign in here</h3>

      <form action="">
        <label htmlFor="email">Email</label>
        <input name='email' type="email" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <label htmlFor="text">Project Name</label>
        <input name="text" type="text" />
        
        <button>SIGN IN</button>
      </form>
      <p>Don't have an account?, <Link to="/signup">Sign Up</Link></p>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}
