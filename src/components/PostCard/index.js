import React from "react";
import "./posts.css";

const PostCard = ({ placeholder, title, text }) => (
  <div className="card">
    <img className="card-img-top" src={placeholder} />
    <h5 className="card-title"> {title}</h5>
    <p className="post-text">{text} </p>
  </div>
);

export default PostCard;
