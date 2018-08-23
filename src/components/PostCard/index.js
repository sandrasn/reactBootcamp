import React from "react";
import "./posts.css";

export const sum = (a, b) => a + b;

const PostCard = ({ image, title, text }) => (
  <div className="card">
    <img className="card-img-top" src={image} />
    <h5 className="card-title"> {title}</h5>
    <p className="post-text">{text} </p>
  </div>
);

export default PostCard;
