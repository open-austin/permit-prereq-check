import React, { Component } from 'react';

export default class About extends Component {
  ignoreDismiss = (e) => e.stopPropagation();

  dismiss = () => this.props.setVisible(false);

  render() {
    const className = 'overlay' + (this.props.visible ? ' in' : '');
    return (
      <div className={className} onClick={this.dismiss}>
        <div className="modal" onClick={this.ignoreDismiss}>
          <h1>About</h1>
          <p>Kombucha air plant pinterest fixie williamsburg. Heirloom
            sustainable disrupt, fashion axe shoreditch normcore lyft tbh </p>
          <button className="btn">Contribute</button>
          <button className="btn btn-secondary" onClick={this.dismiss}>Close</button>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  visible: React.PropTypes.bool,
  setVisible: React.PropTypes.func
};
