import React, { Component } from "react";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  }; // noklusejuma dati
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value }); // tiek atjauninata visa komponente uz katra burta ierakstu

  handleLogin = () => {
    const { email, password } = this.state;
    //tiek izveidota darbiba aiziet uz actions/user.js
    this.props.login(email, password).then(() => {
      if (this.props.loginReducer.isLogged) {
        this.props.history.push("/"); //Navigate to home, using server responses that are placed in props and given to loginReducer.
      }
    });
  }; // funkcija tiek izsaukta tad, kad tiek nospiesta poga sign in .
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="m-auto">
            <div className="col-sm-5">
              <p className="loginTitle">Instagram </p>
              <form>
                <input
                  className="login_u"
                  type="email"
                  name="email"
                  placeholder="examplel@email.com"
                  onChange={this.onChange}
                />
                <input
                  className="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
              </form>
              <button
                type="submit"
                className="submit"
                onClick={this.handleLogin}
              >
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
