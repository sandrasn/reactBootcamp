import React, { Component } from "react";
import "./index.css";

class PostModal extends Component {
  state = {
    imageUrl: null
  };

  handleAddImg = event => {
    const file = event.target.files[0]; // built in JS function plus only one file acception
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageUrl: fileReader.result });
    };
    fileReader.readAsDataURL(file);
  };

  render() {
    const { imageUrl } = this.state;

    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New post</h5>
            <button type="button" className="close" />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label> Caption: </label>
                <input className="form-control" type="text " />
              </div>

              <input
                className="input-img"
                type="file"
                onChange={this.handleAddImg}
              />
            </form>
            {imageUrl ? (
              <img className="img-prev" src={imageUrl} alt="img_placeholder" />
            ) : null}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.handleCloseModal}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostModal;
