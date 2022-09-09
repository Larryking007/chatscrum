import './App.css';
import React from 'react';
import Signup from './components/sign-up/sign-up';
import Signin from './components/sign-in/sign-in';
import Home from './components/home/home';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    );
  }
}

export default App;
