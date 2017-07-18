import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import ReactCSSTransitionGroup from '../node_modules/react-addons-css-transition-group';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => (

  <BrowserRouter>

    <div>

      <div className="content">

        <Route path="/me" component={Header} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/me/about" component={About} />
          <Route exact path="/me/projects" component={Projects} />
          <Route exact path="/me/contact" component={Contact} />
        </Switch>

      </div>

    </div>

  </BrowserRouter>

);

export default App;
