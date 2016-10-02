import React, { Component } from 'react';
import NavBar from './components/nav-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar location={this.props.location}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
