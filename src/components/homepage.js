import React, { Component } from 'react';
import logo from '../img/home-icon.png';

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="lead">
            <img src={logo} alt="placeholder"/>
            <h1>ATX Permitting Review Check</h1>
            <h2>Get your residential express check.</h2>
          </div>
          <button className="btn">Get Started</button>
          <p><a href="#">About</a></p>
        </div>
      </main>
    );
  }
}
