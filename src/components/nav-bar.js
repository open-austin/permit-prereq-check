import React, { Component } from 'react';

class NavBarItem extends Component {
  isActive(tab) {
    return this.props.activeTab === tab ? 'active' : '';
  }

  capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }

  handleItemClick = (e) => {
    this.props.setActiveTab(this.props.name);
  }

  render() {
    return (
      <li
        className={this.isActive(this.props.name)}
        onClick={this.handleItemClick}>
        <a href="#">{this.capitalize(this.props.name)}</a>
      </li>
    );
  }
}

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <NavBarItem name="welcome" {...this.props}/>
          <NavBarItem name="location" {...this.props}/>
          <NavBarItem name="report" {...this.props}/>
        </ul>
      </nav>
    );
  }
}
