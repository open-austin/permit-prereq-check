import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar';
// import HomePage from './components/homepage';
// import ReviewCheck from './components/review-check';
import ReviewForm from './components/review-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'welcome' };
  }

  setActiveTab = (activeTab) => {
    this.setState({ activeTab });
  }

  render() {
    return (
      <div className="App">
        <NavBar activeTab={this.state.activeTab} setActiveTab={this.setActiveTab}/>
        <ReviewForm/>
      </div>
    );
  }
}

export default App;
