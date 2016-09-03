import React, { Component } from 'react';

export default class ReviewCheck extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <h1>Permit Review Checks</h1>
          <h2>Reviews needed for your permit</h2>
          <ul className="permit-list">
            <li>Floodplain Zone</li>
            <li>Airport Overlay</li>
            <li>Historic District</li>
          </ul>
          <p>
            <a href="#">{"Don't see the review(s) you need?"}</a>
          </p>
          <button className="btn">Next</button>
        </div>
      </main>
    );
  }
}
