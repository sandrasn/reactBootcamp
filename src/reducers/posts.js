import { SUBMIT_ERROR, SUBMIT_SUCCESS, LOAD_POSTS } from "../constatnts";

//
export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_SUCCESS:
      return { ...state, ...action.payload };
    case SUBMIT_ERROR:
      return { ...state, ...action.payload };
    case LOAD_POSTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
