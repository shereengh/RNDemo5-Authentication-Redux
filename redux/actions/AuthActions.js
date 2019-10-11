import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://178.128.114.232/api/"
});

const setAuthToken = token => {
  if (token) {
    AsyncStorage.setItem("token", token);

    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    AsyncStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = navigation => {
  return async dispatch => {
    // Get token
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      console.log((user.exp - currentTime) / 60);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = userData => {
  return async dispatch => {
    try {
      let response = await instance.post("login/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      //navigation.replace("Lo");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = userData => {
  return async dispatch => {
    try {
      await instance.post("register/", userData);
      dispatch(login(userData, navigation));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
