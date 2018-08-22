import {
  LOGIN_SUCCES,
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCES
} from "../constatnts";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCES:
      return { ...state, ...action.payload };
    case LOGIN_ERROR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_SUCCES:
      console.log(action);
      return { ...state, ...action.payload };
    case REGISTER_ERROR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
