import React, { Component } from 'react';
import { Link } from 'react-router';
import geolocateIcon from '../img/geolocate_icon.png';
import { getAddress } from '../utils';

export default class ReviewForm extends Component {
  aboutOnClick = (e) => {
    e.preventDefault();
    this.props.setShowAbout(true);
  }

  onAddressChange = (e) => this.props.setAddress(e.target.value);
  onSuiteAptChange = (e) => this.props.setSuiteApt(e.target.value);
  onZipChange = (e) => this.props.setZip(e.target.value);

  geolocateOnClick = (e) => {
    const { setAddress, setZip, addLoader, removeLoader } = this.props;
    addLoader();
    getAddress(function success(address, zip) {
      setAddress(address);
      setZip(zip);
      removeLoader();
    }, function fail(positionError) {
      console.log(positionError);
      removeLoader();
    });
  }
  render() {
    return (
      <main>
        <div className="container">
          <h2>Enter the project address</h2>
          <div className="form-group">
            <button className="btn btn-geolocate" onClick={this.geolocateOnClick}>Use Current Location
              <img alt="geolocate icon" src={geolocateIcon} className="icon-geolocate"/>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input id="address"
                   type="text"
                   onChange={this.onAddressChange}
                   value={this.props.address}/>
          </div>
          <div className="form-group">
            <label htmlFor="street-suite-apt">Suite/Apartment Number</label>
            <input id="street-suite-apt"
                   type="text"
                   onChange={this.onSuiteAptChange}
                   value={this.props.suiteApt}/>
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input id="zip"
                   type="text"
                   onChange={this.onZipChange}
                   value={this.props.zip}/>
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
