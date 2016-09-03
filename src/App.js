import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar';
import HomePage from './components/homepage';
// import ReviewCheck from './components/review-check';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
