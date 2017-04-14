import React from 'react';

class Navbar extends React.Component {

  signOut() {
    console.log('Footer')
  }
  render() {
    return (
          <div className="header">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Page 1-1</a></li>
                      <li><a href="#">Page 1-2</a></li>
                      <li><a href="#">Page 1-3</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Page 2</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
              </div>
            </nav>
      
            <div className="container">
              <h3>Right Aligned Navbar</h3>
              <p>The .navbar-right className is used to right-align navigation bar buttons.</p>
            </div>
         </div>
    );
  }
}


module.exports = Navbar;