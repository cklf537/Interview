import React, { Component } from "react";
import RatingCard from "./RatingScale";
import { connect } from "react-redux";
import FeedbackForm from "./FeedbackForm";
import { addTehnology } from "../actions/feedActions";

class Feedback extends Component {
  handelClick = () => {
    console.log(this.props);
    this.props.addT(this.props.defaultTechStack[0]);
    this.setState(this.props);
  };
  render() {
    const { rating, defaultTechStack } = this.props;
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
            <RatingCard rating={rating} />
            <div className="card col-md-12">
              <div className="card-header">Technologies</div>
              <div className="card-body">
                {defaultTechStack.map(count => {
                  return (
                    <FeedbackForm
                      handelClick={this.handelClick}
                      count={count}
                      key={count}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { rating, technologies, defaultTechStack } = state.feedback;
  return {
    rating,
    technologies,
    defaultTechStack
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addT: count => {
      dispatch(addTehnology(count));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);
