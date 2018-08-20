import React, { Component } from "react";

class UserCard extends Component {
  render() {
    return (
      <div class="user">
        <img className="user-img" src={this.props.image} />
        <p className="username"> {this.props.username}</p>
      </div>
    );
  }
}

export default UserCard;
