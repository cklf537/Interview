import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Feedback from "../components/Feedback";
import { connect } from "react-redux";

class App extends Component {
  render() {
    debugger;
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation navigation={this.props.navigation} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/feedback" component={Feedback} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  const { title, navigation, rating } = state.interview;
  return { title, navigation, rating };
};

export default connect(mapStateToProps)(App);
