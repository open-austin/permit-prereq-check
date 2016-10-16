import React, { Component } from 'react';
import NavBar from './components/nav-bar';
import About from './components/about';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,  // bool to show about modal
      address: '',
      suiteApt: '',
      zip: '',
      loadingCount: 0
    };

    nprogress.configure({ showSpinner: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loadingCount > 0) {
      nprogress.start();
    } else {
      nprogress.done();
    }
  }

  // modal controls
  setShowAbout = (showAbout) => this.setState({ showAbout })

  // form controls
  setAddress = (address) => this.setState({ address })
  setSuiteApt = (suiteApt) => this.setState({ suiteApt })
  setZip = (zip) => this.setState({ zip })

  // spinner controls
  addLoader = () => this.setState({ loadingCount: this.state.loadingCount + 1 });
  removeLoader = () => this.setState({ loadingCount: Math.max(this.state.loadingCount - 1, 0) });

  render() {
    return (
      <div className="App">
        <NavBar location={this.props.location}/>
        {React.cloneElement(this.props.children, {
          setShowAbout: this.setShowAbout,
          setAddress: this.setAddress,
          setSuiteApt: this.setSuiteApt,
          setZip: this.setZip,
          addLoader: this.addLoader,
          removeLoader: this.removeLoader,
          ...this.state
        })}
        <About visible={this.state.showAbout} setVisible={this.setShowAbout}/>
      </div>
    );
  }
}

export default App;
