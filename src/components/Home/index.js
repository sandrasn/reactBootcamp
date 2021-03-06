import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "../../containers/Posts";
import UserList from "../UserList";
import Header from "../Header";
import PostModal from "../../containers/PostModal";
import LightBox from "../LightBox";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    props.validateToken();
  }

  componentDidUpdate() {
    //This function wont allow to see page without loggin in.
    const { loginReducer } = this.props;
    if (!loginReducer.isLogged) {
      this.props.history.push("/login");
    }
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleClickOutside = event => {
    if (event.target.id === "lightbox") {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="container">
        <div className="row">
          <Header handleOpenModal={this.handleOpenModal} />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Posts />
          </div>
          <div className="col-sm-6">
            <UserList />
          </div>
        </div>
        {/* {isModalOpen ? (
          <PostModal handleCloseModal={this.handleCloseModal} />
        ) : null} */}
        {/* {isModalOpen && <PostModal />} Same function as line above */}
        {isModalOpen ? (
          <LightBox handleClickOutside={this.handleClickOutside}>
            <PostModal handleCloseModal={this.handleCloseModal} />
          </LightBox>
        ) : null}
      </div>
    );
  }
}

export default Home;
