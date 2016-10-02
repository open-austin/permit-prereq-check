import React, { Component } from 'react';
import { Link } from 'react-router';
import { capitalize } from '../utils';

class NavBarItem extends Component {
  render() {
    const { linkTo, location } = this.props;
    const className = linkTo === location.pathname ? 'active' : '';

    return (
      <li className={className}>
        <Link to={this.props.linkTo}>{capitalize(this.props.name)}</Link>
      </li>
    );
  }
}

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <NavBarItem name="welcome" linkTo="/" {...this.props}/>
          <NavBarItem name="location" linkTo="/location" {...this.props}/>
          <NavBarItem name="report" linkTo="/report" {...this.props}/>
        </ul>
      </nav>
    );
  }
}
