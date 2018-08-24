import axios from "axios";
import sha256 from "sha256";
import {
  API,
  LOGIN_SUCCES,
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCES
} from "../constatnts";

const loginSuccesss = () => {
  //padod uz reducers
  return {
    type: LOGIN_SUCCES,
    payload: {
      isLogged: true
    }
  };
};

const loginError = () => {
  return {
    type: LOGIN_ERROR,
    payload: {
      isLogged: false
    }
  };
};

const registerSuccesss = () => {
  return {
    type: REGISTER_SUCCES,
    payload: {
      isRegistred: true
    }
  };
};

const registerError = () => {
  return {
    type: REGISTER_ERROR,
    payload: {
      isRegistred: false
    }
  };
};

export const login = (email, password) => {
  return dispatch => {
    return axios
      .post(`${API.BASE}${API.LOGIN}`, {
        email,
        hashedPassword: sha256(password)
      })
      .then(res => {
        const { token } = res.data.payload; //const token = res.data.payload.token a bit older syntax, but function the same.
        localStorage.setItem("jwtToken", token); // localStorage is built in
        dispatch(loginSuccesss());
      })
      .catch(err => {
        dispatch(loginError());
      });
  };
};

export const register = (email, username, password) => {
  console.log(email, username, password);
  return dispatch => {
    return axios
      .post(`${API.BASE}${API.REGISTER}`, {
        email,
        username,
        hashedPassword: sha256(password)
      })
      .then(() => {
        console.log("sent");
        dispatch(registerSuccesss());
      })
      .catch(() => {
        console.log("not sent");
        dispatch(registerError());
      });
  };
};

//Middleware
export const validateToken = () => {
  return dispatch => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      dispatch(loginSuccesss());
    } else {
      dispatch(loginError());
    }
  };
};
