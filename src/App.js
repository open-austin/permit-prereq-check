import React, { Component } from 'react';
import NavBar from './components/nav-bar';
import About from './components/about';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false  // bool to show about modal
    };
  }

  setShowAbout = (showAbout) => {
    this.setState({ showAbout });
  }

  render() {
    return (
      <div className="App">
        <NavBar location={this.props.location}/>
        {React.cloneElement(this.props.children, { setShowAbout: this.setShowAbout })}
        <About visible={this.state.showAbout} setVisible={this.setShowAbout}/>
      </div>
    );
  }
}

export default App;
