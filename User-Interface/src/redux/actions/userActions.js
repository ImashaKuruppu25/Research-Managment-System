import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../../constants/userConstants";
import axios from "axios";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `http://localhost:5000/user/login`,
      { email, password },
      config
    );
  
    if (data.accesstoken) {
      localStorage.setItem("token", data.accesstoken);
      localStorage.setItem("userEmail", data.user.email);
      localStorage.setItem("userId", data.user._id);
      localStorage.setItem("userImage", data.user.image);
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `http://localhost:5000/user/register`,
      userData,
      config
    );
    if (data.accesstoken) {
      localStorage.setItem("token", data.accesstoken);
      localStorage.setItem("userEmail", data.newUser.email);
      localStorage.setItem("userId", data.newUser._id);
      localStorage.setItem("userImage", data.newUser.image);
      dispatch({ type: LOGIN_SUCCESS, payload: data.newUser });
    }

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.newUser });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.msg
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
