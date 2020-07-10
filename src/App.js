// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// CSS
import './App2.css';

// Components
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path={"/login"} component={Login}/>
        <Route exact path="/home" component={Home}/>

      </Switch>
    </Router>

    // <Home />
    // <Login />
  );
}

const mapDispatchToProps = dispatch => {
  return {
    incr: () => dispatch({type: "INCR"})
  };
}

const mapStateToProps = state => {
  return {
    test: state.testState
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
