import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//import background from './images/milky-way.jpeg';

class Home extends Component {

  render() {
    return (

      <div>

          <ReactCSSTransitionGroup
            component="div"
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={1000}>

            <h1>Hello!</h1>

          </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup
            component="div"
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}>

            <p>I am Shane Randolph, a front-end web developer from ... I combine a ... with .... to create data-validated designs</p>

          </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup
            component="div"
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}>

            <p>You are probably here for ....  Choose an option below to ...</p>

            <ul className="main-nav horizontal">
              <li><NavLink to="/me/about"
                className="purple-background">
                About</NavLink>
              </li>
              <li><NavLink to="/me/projects"
                className="green-background">
                Projects</NavLink>
              </li>
              <li><NavLink to="/me/contact"
                className="orange-background">
                Contact</NavLink>
              </li>
            </ul>

          </ReactCSSTransitionGroup>

      </div>
    );
  }
}

export default Home;
