/** @format */

import * as types from "../constants/product";
import { toastError,toastSuccess } from './../helper/toastHelper'

const initialState = {userName: '', id: 0, cartProduct: []};

const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CART_SUCCESS: {
      localStorage.removeItem("NinhNamUser");
      localStorage.setItem("NinhNamUser", JSON.stringify(action.payload.data));
      if(action.payload.mess === 'add'){
        toastSuccess('Thêm sản phẩm vào giỏ hàng thành công')
      }else if(action.payload.mess === 'delete') {
        toastSuccess('Xóa sản phẩm khỏi giỏ hàng thành công')
      }
      return action.payload.data
    }
    case types.ADD_CART_FAIL: {
      toastError('Thêm vào giỏ hàng thất bại')
    }

    default:
      return state;
  }
};

export default handleCart;
