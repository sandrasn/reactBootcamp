import { API, SUBMIT_SUCCESS, SUBMIT_ERROR, LOAD_POSTS } from "../constatnts";
import Axios from "axios";

const submitSuccess = () => {
  return {
    type: SUBMIT_SUCCESS,
    payload: {
      isSubmitted: true
    }
  };
};

const submitError = () => {
  return {
    type: SUBMIT_ERROR,
    payload: {
      isSubmitted: false
    }
  };
};

//Work with posts
export const submitPost = (data, caption) => {
  const token = localStorage.getItem("jwtToken");
  return dispatch => {
    return Axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data,
      url: `${API.BASE}${API.POST_IMAGE}`
    })
      .then(res => {
        return Axios({
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            contentId: res.data.payload.contentId,
            caption
          },
          url: `${API.BASE}${API.POST_CAPTION}`
        })
          .then(() => dispatch(submitSuccess()))
          .then(() => dispatch(submitError()));
      })
      .catch(() => dispatch(submitError()));
  };
};

const loadPosts = data => {
  console.log(data);
  return {
    type: LOAD_POSTS,
    payload: data
  };
};

export const getPosts = () => {
  const token = localStorage.getItem("jwtToken");

  return dispatch => {
    return Axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`
      },
      url: `${API.BASE}${API.GET_POSTS}`
    }).then(res => {
      dispatch(loadPosts({ list: res.data.payload.reverse() })); // reverse shows database elements from 10 to 1
    });
  };
};
