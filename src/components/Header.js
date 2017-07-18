import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() {
    return (

      <div className="header">
        <NavLink exact to="/" className="header-option"><span className="glyphicon glyphicon-arrow-left"></span>Return to Home</NavLink>
        <NavLink exact to="/me/about" className="header-option"><span className="glyphicon glyphicon-arrow-right"></span>About</NavLink>
      </div>

    );
  }
}

export default Header;
