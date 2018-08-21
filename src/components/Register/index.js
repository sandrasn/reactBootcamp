import React, { Component } from "react";
import "./index.css";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="mx-auto">
            <div className="col-sm-5">
              <p className="registerTitle">Instagram </p>
              <form>
                <input
                  className="register_u"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="register_email"
                  type="text"
                  placeholder="example@mail.com"
                />
                <input
                  className="register_p"
                  type="password"
                  placeholder="Password"
                />
              </form>
              <button type="submit" className="submit">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
