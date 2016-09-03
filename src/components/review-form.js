import React, { Component } from 'react';

export default class ReviewForm extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <h1>Permit Review Check</h1>
          <div className="review-form-columns">
            <section>
              <h2>Project Address</h2>
              <div className="form-group">
                <label htmlFor="street-number">Street Number</label>
                <input id="street-number" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="street-name">Street Name</label>
                <input id="street-name" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="street-suite-apt">Suite/Apartment Number</label>
                <input id="street-suite-apt" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip Code</label>
                <input id="zip" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="city-state">City, State</label>
                <div>Austin, TX</div>
              </div>
              <p>
                <button className="btn">Run Check</button>
              </p>
            </section>
            <section>
              <div className="map">
                <p>Map Here</p>
              </div>
              <p><a href="#">Map not showing the correct location?</a></p>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
