import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../img/intro_logo.png';

export default class HomePage extends Component {
  aboutOnClick = (e) => {
    e.preventDefault();
    this.props.setShowAbout(true);
  }

  render() {
    return (
      <main>
        <div className="container">
          <img src={logo} alt="Permit Check Logo" className="logo"/>
          <h1>ATX Permitting Review Check</h1>
          <h2>Get your residential express check.</h2>
          <Link to={'/location'}>
            <button className="btn">Get Started</button>
          </Link>
          <p><a href="#" onClick={this.aboutOnClick}>About</a></p>
        </div>
      </main>
    );
  }
}
