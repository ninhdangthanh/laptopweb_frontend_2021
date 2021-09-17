/** @format */

import * as productConstant from "./../constants/product";

export const getProducts = (params = {}) => {
  return {
    type: productConstant.GET_PRODUCT,
    payload: {
      params,
    },
  };
};

export const getProductsSuccess = (data) => {
  return {
    type: productConstant.GET_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getProductsFail = (error) => {
  return {
    type: productConstant.GET_PRODUCT_SUCCESS,
    payload: {
      error,
    },
  };
};

export const selectTMseries = (data) => {
  return {
    type: productConstant.SELECT_TRADEMARK_SERIES,
    payload: {
      data,
    },
  };
};

export const addCart = (params) => {
  return {
    type: productConstant.ADD_CART,
    payload: {
      params,
    },
  };
};

export const addCartSuccess = (data, mess) => {
  localStorage.removeItem("NinhNamUser");
  localStorage.setItem("NinhNamUser", JSON.stringify(data));
  return {
    type: productConstant.ADD_CART_SUCCESS,
    payload: {
      data,
      mess
    },
  };
};

export const addCartFail = (error) => {
  return {
    type: productConstant.ADD_CART_FAIL,
    payload: {
      error,
    },
  };
};
