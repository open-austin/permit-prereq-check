import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contribute</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
