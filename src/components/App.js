import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Feedback from "../components/Feedback";

class App extends Component {
  state = {
    title: "Interview Feedback Form",
    navigation: ["Dashboard", "Feedback"],
    rating: [
      {
        title: "Outstanding",
        description: ""
      },
      {
        title: "Excellent",
        description: "exceeds Requirement"
      },
      {
        title: "Competent",
        description: "Acceptable Proficiency"
      },
      {
        title: "Below Average",
        description: "Dose Not Meet Requirement"
      },
      {
        title: "N/A",
        description: "Unable to determin / not applicable for this candidate."
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <div className="container">
              <Navigation navigation={this.state.navigation} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/feedback" component={Feedback} />
            </div>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
