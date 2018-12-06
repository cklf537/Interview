import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navigation = props => {
  debugger;
  const { navigation } = props;
  return (
    <React.Fragment>
      <nav className="border-bottom shadow-sm p-1 mb-5 bg-white rounded">
        <div className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            FeedBack
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {navigation.map(navItem => {
                return (
                  <li className="nav-item-active" key={navItem}>
                    <Link to={`/${navItem}`} className="nav-link">
                      {navItem}
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(Navigation);
