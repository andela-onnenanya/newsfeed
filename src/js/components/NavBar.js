import React from 'react';
import Logout from './Logout';

/**
 * @param {void}
 * @return {element} Navigations-bar
 */
const NavBar = () =>
  <div className="header">
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">gistMe</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <img
            src="img/globe-earth-animation.gif" alt="background"
          />
          <Logout />
        </ul>
      </div>
    </nav>
  </div>;

export default NavBar;
