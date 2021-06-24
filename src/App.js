import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Nav />
      <>
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </>
    </Router>
  );
}

export default App;
