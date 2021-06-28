import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import MainRouter from "./MainRouter";

import "./App.css";

export class App extends Component {
  state = {
    user: null,
  };

  handleUserLogin = (user) => {
    this.setState({
      user: {
        email: user.email,
      },
    });
  };

  render() {
    return (
      <>
        <ToastContainer position="top-center" />

        <MainRouter
          user={this.state.user}
          handleUserLogin={this.handleUserLogin}
        />
      </>
    );
  }
}

export default App;
