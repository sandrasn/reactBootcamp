import React from "react";

const UserCard = ({ image, username }) => (
  <div className="user">
    <img className="user-img" src={image} />
    <p className="username"> {username}</p>
  </div>
);

export default UserCard;
