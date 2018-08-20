import React, { Component } from "react";
import PostCard from "../PostCard";
import placeholder from "../../media/image-placeholder.svg";

class Posts extends Component {
  render() {
    return (
      <div className="mx-auto">
        <PostCard
          text="some text 0 "
          title="Some title 0"
          placeholder={placeholder}
        />
        <PostCard
          text="some text 1 "
          title="Some title 1"
          placeholder={placeholder}
        />
        <PostCard
          text="some text 1 "
          title="Some title 1"
          placeholder={placeholder}
        />
        <PostCard
          text="some text 1 "
          title="Some title 1"
          placeholder={placeholder}
        />
        <PostCard
          text="some text 1 "
          title="Some title 1"
          placeholder={placeholder}
        />
        <PostCard
          text="some text 1 "
          title="Some title 1"
          placeholder={placeholder}
        />
        <PostCard
          text="some text 1 "
          title="Some title 1"
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Posts;
