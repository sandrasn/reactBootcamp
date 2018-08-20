import React, { Component } from "react";
import logo from "../../media/image-placeholder.svg";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return (
      <div className="col-sm-12 nav-bar">
        <img className="insta_logo" src={logo} />
        <button className="create_btn">Log Out </button>
        <button className="log_btn"> New post </button>
      </div>
    );
  }
}

export default Header;
