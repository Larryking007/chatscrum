import './App.css';
import React from 'react';
import Signup from './components/sign-up/sign-up';
import Signin from './components/sign-in/sign-in';
import Home from './components/home/home';
import { BrowserRouter } from 'react-router-dom';
import signIn from './components/sign-in/sign-in';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <div className='App'>
        <Route path="/" Component={Home} />
        <Router path="/signin" Component={Signin} />
        <Router path="/signup" Component={Signup} />
      </div>
      </BrowserRouter> 
    );
  }
}

export default App;
