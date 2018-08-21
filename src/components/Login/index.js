import React, { Component } from "react";
import "./index.css";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="m-auto">
            <div className="col-sm-5">
              <p className="loginTitle">Instagram </p>
              <form>
                <input className="login_u" type="text" placeholder="Username" />
                <input
                  className="password"
                  type="password"
                  placeholder="Password"
                />
              </form>
              <button type="submit" className="submit">
                Sign In
              </button>
              <a className="register" href="#">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
