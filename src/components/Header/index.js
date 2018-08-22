import React, { Component } from "react";
import logo from "../../media/logo_i.png";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import PostModal from "../PostModal";

class Header extends Component {
  render() {
    return (
      <div className="col-sm-12 nav-bar">
        <div className="icon">
          <i className="fas fa-camera-retro fa-2x" />
        </div>
        <button className="create_btn">Log Out</button>
        <button className="log_btn" onClick={this.props.handleOpenModal}>
          New post
        </button>
      </div>
    );
  }
}

export default Header;
