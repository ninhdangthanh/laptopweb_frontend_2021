/** @format */

import * as productConstant from "../constants/user";
import * as userConstant from "../constants/user";

export const getUsers = (params = {}) => {
  return {
    type: productConstant.GET_LIST_USER,
    payload: {
      params,
    },
  };
};

export const getUsersSuccess = (data) => {
  return {
    type: productConstant.GET_LIST_USER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getUsersFail = (error) => {
  return {
    type: productConstant.GET_LIST_USER_FAILED,
    payload: {
      error,
    },
  };
};

export const SignInUser = (params = {}) => {
  return {
    type: userConstant.SIGN_IN,
    payload: {
      params,
    },
  };
};

export const SignInUserSuccess = (data) => {
  return {
    type: userConstant.SIGN_IN_SUCCESS,
    payload: {
      data,
    },
  };
};

export const SignInUserFail = (error) => {
  return {
    type: userConstant.SIGN_IN_FAILED,
    payload: {
      error,
    },
  };
};

export const changeUserLocal = () => {
  return {
    type: userConstant.CHANGE_USER_LOCAL_STORAGE,
  };
};
