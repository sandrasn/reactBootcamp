import React, { Component } from "react";
import UserCard from "../UserCard";
import image from "../../media/image-placeholder.svg";
import "./user.css";

class UserList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <UserCard image={image} username="username_0" />
            <UserCard image={image} username="username_1" />
            <UserCard image={image} username="username_2" />
            <UserCard image={image} username="username_3" />
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
