import React, { Component } from 'react';
import { Link } from 'react-router';
import geolocateIcon from '../img/geolocate_icon.png';

export default class ReviewForm extends Component {
  aboutOnClick = (e) => {
    e.preventDefault();
    this.props.setShowAbout(true);
  }

  render() {
    return (
      <main>
        <div className="container">
          <h2>Enter the project address</h2>
          <div className="form-group">
            <button className="btn btn-geolocate">Use Current Location
              <img alt="geolocate icon" src={geolocateIcon} className="icon-geolocate"/>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input id="address" type="text"/>
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
            <h2>Austin, TX</h2>
          </div>
          <div className="btn-group">
            <Link to={'/'} className="btn btn-inline btn-secondary">Back</Link>
            <Link to={'/report'} className="btn btn-inline">Submit</Link>
          </div>
          <p><a href="#" onClick={this.aboutOnClick}>About</a></p>
        </div>
      </main>
    );
  }
}
