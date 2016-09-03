import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <section className="section-begin">
            <img src="placeholder.jpg" alt="placeholder"/>
            <h1>ATX Permitting Review Check</h1>
            <p>Quickly check addtional reviews needed to complete your project application</p>
            <button className="btn">Begin Check</button>
          </section>
        </div>
      </main>
    );
  }
}
