import React, { Component } from "react";
import "./index.css";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
    isError: false
  };
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  validateEmail = mail => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  handleRegister = e => {
    e.preventDefault();
    const { email, password, username } = this.state;

    if (this.validateEmail(email)) {
      this.setState({ isError: false });
      this.props.register(email, username, password).then(() => {
        console.log(this.props);
        if (this.props.registerReducer.isRegistred) {
          this.props.history.push("/login");
        }
      });
    } else {
      this.setState({
        error: "Please, enter valid email!",
        isError: true
      });
    }
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
                {this.state.isError && <p>{this.state.error} </p>}
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
