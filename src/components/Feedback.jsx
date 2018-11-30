import React, { Component } from "react";
import RatingCard from "./RatingScale";

class Feedback extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <p className="h4">Candidate Evaluation Form</p>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4" />
              <input
                type="text"
                className="form-control"
                placeholder="Employee Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4" />
              <input
                type="text"
                className="form-control"
                placeholder="Employee Number"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputEmail4" />
              <input
                type="text"
                className="form-control"
                placeholder="Applicant Name"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputEmail4" />
              <input
                type="text"
                className="form-control"
                placeholder="Position"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputEmail4" />
              <input
                type="text"
                className="form-control"
                placeholder="HR Spoc Name"
              />
            </div>
            <RatingCard />
          </div>
        </form>
      </div>
    );
  }
}

export default Feedback;
