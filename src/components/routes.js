import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from '../App';
import Homepage from './homepage';
import ReviewForm from './review-form';
import ReviewCheck from './review-check';
import NoMatch from './no-match';

export default class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Homepage}/>
          <Route path="location" component={ReviewForm}/>
          <Route path="report" component={ReviewCheck}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
