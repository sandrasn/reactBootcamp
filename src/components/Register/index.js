import React, { Component } from "react";
import "./index.css";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleRegister = e => {
    e.preventDefault();
    const { email, password, username } = this.state;
    this.props.register(email, username, password).then(() => {
      console.log(this.props);
      if (this.props.registerReducer.isRegistred) {
        this.props.history.push("/login");
      }
    });
  };

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
                  type="username"
                  name="username"
                  placeholder="Username"
                  onChange={this.onChange}
                />
                <input
                  className="register_email"
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  onChange={this.onChange}
                />
                <input
                  className="register_p"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
                <button
                  type="submit"
                  className="submit"
                  onClick={this.handleRegister}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
