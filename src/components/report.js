import React, { Component } from 'react';
import { Link } from 'react-router';
import checkIcon from '../img/check_icon.png';
import yieldIcon from '../img/yield_icon.png';

export default class Report extends Component {
  aboutOnClick = (e) => {
    e.preventDefault();
    this.props.setShowAbout(true);
  }

  render() {
    return (
      <main>
        <div className="container">
          <h1>{"OK, here's your report!"}</h1>
        </div>
        <section>
          <div className="container">
            <div className="flex-between">
              <div>
                <strong>Project Address</strong>
                <address>
                  12 Justin Lane, Apt 231<br/>
                  Austin, TX 78704
                </address>
              </div>
              <div>
                <Link to={'/location'} className="btn">Edit location</Link>
              </div>
            </div>
          </div>
        </section>
        <div className="map">{/* TODO */}</div>
        <section>
          <div className="container">
          <ul className="list-report">
            <li>
              <h1><img className="icon-check" alt="Check" src={checkIcon}/>Floodplain Zone</h1>
              <h2>You are not within 150 feet from a floodplain.</h2>
              <p>No action is required before submitting your permit application</p>
            </li>
            <li>
              <h1><img className="icon-check" alt="Check" src={checkIcon}/>Airport Overlay</h1>
              <h2>You are in an airport overlay zone.</h2>
              <p>No action is required before submitting your permit application. After you submit your applications you may be asked to do additional reviews before beginning your project.</p>
            </li>
            <li>
              <h1><img className="icon-yield" alt="Check" src={yieldIcon}/>Historic District</h1>
              <h2>You are in a historic district.</h2>
              <p>Action is required before submitting your permit application. Before submitting your application you must complete the following steps:</p>
              <ul>
                <li>Download and complete the <a href="#">Historic Review</a></li>
                <li>Submit the Historic Review to the <a href="#">Historic Preservation Office</a> for approval</li>
                <li>Once approved you can submit your application to the <a href="#">Development Services Department</a></li>
              </ul>
            </li>
          </ul>
          </div>
        </section>
        <div className="container">
          <div className="btn-group">
            <Link to={'/location'} className="btn btn-inline btn-secondary">Back</Link>
            <button className="btn btn-inline">Print Report</button>
          </div>
          <p>
            <a href="#">{"Don't see your review?"}</a>&nbsp;&nbsp;&nbsp;
            <a href="#" onClick={this.aboutOnClick}>About</a>
          </p>
        </div>
      </main>
    );
  }
}
