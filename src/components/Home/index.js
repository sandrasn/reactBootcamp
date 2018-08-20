import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "../Posts";
import UserList from "../UserList";
import Header from "../Header";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Posts />
          </div>
          <div className="col-sm-6">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
