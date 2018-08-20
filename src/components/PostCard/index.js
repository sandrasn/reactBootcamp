import React, { Component } from "react";
import "./posts.css";

class PostCard extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.placeholder} />
        <h5 className="card-title"> {this.props.title}</h5>
        <p className="post-text">{this.props.text} </p>
      </div>
    );
  }
}

export default PostCard;
