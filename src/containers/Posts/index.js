import { connect } from "react-redux";
import Posts from "../../components/Posts";
import { getPosts } from "../../actions/posts"; // call from API

export default connect(
  state => ({ postsReducer: state.postsReducer }),
  { getPosts }
)(Posts);
