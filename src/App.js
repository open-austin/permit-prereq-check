import React, { Component } from 'react';
import NavBar from './components/nav-bar';
import About from './components/about';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,  // bool to show about modal
      address: '',
      suiteApt: '',
      zip: ''
    };
  }

  setShowAbout = (showAbout) => this.setState({ showAbout })
  setAddress = (address) => this.setState({ address })
  setSuiteApt = (suiteApt) => this.setState({ suiteApt })
  setZip = (zip) => this.setState({ zip })

  render() {
    return (
      <div className="App">
        <NavBar location={this.props.location}/>
        {React.cloneElement(this.props.children, {
          setShowAbout: this.setShowAbout,
          setAddress: this.setAddress,
          setSuiteApt: this.setSuiteApt,
          setZip: this.setZip,
          ...this.state
        })}
        <About visible={this.state.showAbout} setVisible={this.setShowAbout}/>
      </div>
    );
  }
}

export default App;
