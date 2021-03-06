import React from "react";
import "./../css/Signup.css";

//use below to establish communication bewteen store and individual component
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setGuest } from "../actions/authentication"; //Redux action that sets guest account

function mapStateToProps(state) {
  //only reads store state
  return state;
}

function mapDispatchToProps(dispatch) {
  //writes to store state
  return bindActionCreators(
    {
      setGuest: setGuest
    },
    dispatch
  );
}
//..end redux commands

class Signup extends React.Component {
  handleGuest() {
    //set guest user
    this.props.setGuest();
  }
  handleLogin() {
    //twitter authentication
    window.location = "/auth/twitter";
  }
  render() {
    if (!this.props.user.user.authenticated) {
      if (this.props.user.user.username === "Guest") {
        return null;
      } else {
        return (
          <div className="signup">
            <div className="signup__user">
              It's like Hot or Not,<br /> but for pets
              <button
                className="signup__button"
                onClick={() => this.handleLogin()}
              >
                <i className="fab fa-twitter" />
                Sign up via Twitter
              </button>
            </div>
            <div className="signup__nonuser">
              <p>
                Or, if you don't want to post adorable pictures of your pet,
                just continue as a{" "}
                <span
                  className="signup__nonuser__link"
                  onClick={() => this.handleGuest()}
                >
                  guest
                </span>.
              </p>
            </div>
          </div>
        );
      }
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
