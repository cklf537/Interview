import React, { Component } from "react";
import { connect } from "react-redux";

class FeedBackForm extends Component {
  render() {
    debugger;
    const { technologies } = this.props.feedback;
    return (
      <React.Fragment>
        <div className="form-group col-md-3 float-left">
          <select className="form-control" id="exampleFormControlSelect1">
            <option defaultValue="Choose tehnologies...">
              Choose technologies...
            </option>
            {technologies.map(technology => {
              return (
                <option
                  value={technology.technology}
                  key={technology.technology}
                >
                  {technology.technology}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group col-md-3 float-left">
          <select className="form-control" id="exampleFormControlSelect2">
            <option defaultValue="Choode version...">Choose version...</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group col-md-3 float-left">
          <select className="form-control" id="exampleFormControlSelect2">
            <option defaultValue="Choose rating...">Choose rating...</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group col-md-3 float-left">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.handelClick(this.props.count);
            }}
          >
            Add
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { feedback } = state;
  return {
    feedback
  };
};

export default connect(mapStateToProps)(FeedBackForm);
