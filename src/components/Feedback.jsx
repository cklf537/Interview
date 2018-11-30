import React, { Component } from "react";
import RatingCard from "./RatingScale";
import { connect } from "react-redux";

class Feedback extends Component {
  render() {
    const { technologies } = this.props;
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
            {/* <RatingCard rating={this.props.rating} /> */}
            <div className="card col-md-12">
              <div className="card-header">Technologies</div>
              <div className="card-body">
                <div class="form-group col-md-4 float-left">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group col-md-4 float-left">
                  <select class="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group col-md-4 float-left">
                  <select class="form-control" id="exampleFormControlSelect3">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { rating, technologies } = state;
  return {
    rating,
    technologies
  };
};

export default connect(mapStateToProps)(Feedback);
