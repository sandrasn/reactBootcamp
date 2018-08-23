import React, { Component } from "react";
import PostCard from "../PostCard";
//import placeholder from "../../media/image-placeholder.svg";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    if (!this.props.postsReducer || !this.props.postsReducer.list) {
      return null;
    }
    return (
      <div className="mx-auto">
        {/* {console.log(this.props.postsReducer)} */}
        {this.props.postsReducer.list.map(el => (
          <PostCard key={el._id} image={el.media.path} title={el.title} />
        ))}
      </div>
    );
  }
}

export default Posts;
