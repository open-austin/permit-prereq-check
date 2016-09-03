import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar';
// import HomePage from './components/homepage';
// import ReviewCheck from './components/review-check';
import ReviewForm from './components/review-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ReviewForm/>
      </div>
    );
  }
}

export default App;
