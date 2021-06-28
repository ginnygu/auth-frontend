import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
export class Nav extends Component {
  state = {
    isAuth: false,
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="h1-logo">
          <h1>
            <Link to="/">Movie with friends!</Link>
          </h1>
        </div>
        <div className="right-side-nav">
          <ul>
            <li>
              {this.state.isAuth ? (
                <NavLink activeClassName="selected" to="/profile">
                  Profile
                </NavLink>
              ) : (
                <NavLink activeClassName="selected" to="/sign-up">
                  Sign up
                </NavLink>
              )}
            </li>
            <li>
              {this.state.isAuth ? (
                <NavLink
                  activeStyle={{ borderBottom: "1px solid white" }}
                  to="/logout"
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  activeStyle={{ borderBottom: "1px solid white" }}
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
