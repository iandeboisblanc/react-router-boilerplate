import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from './reactComponents/Main';
import Projects from './reactComponents/Projects';
import About from './reactComponents/About';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component = {Main}>
      <IndexRoute component = {About} />
      <Route path='/projects' component={Projects} />
    </Route>
  </Router>
, document.getElementById('app'));