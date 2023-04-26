import axios from "axios";

export const getAllProducts = () => {
  return async (dispatch) => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
     
      return dispatch({ type: "GET_ALL_PRODUCTS", payload: res.data });
    });
  };
};
export const fetchCart = (productId) => {
  return async(dispatch) => {
   await axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      return dispatch(addToCart(res.data));
    });
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const incrementQty = (id) => {
  return {
    type: "INCREMENT_QTY",
    payload: id,
  };
};
export const decreamentQty = (id) => {
  return {
    type: "DECREMENT_QTY",
    payload: id,
  };
};
export const deleteFromCart = (id) => {
  return {
    type: "DELETE_FROM_CART",
    payload: id,
  };
};
export const GoogleAct = (response) => {
  return {
    type: "GOOGLE_ACTION",
    payload: response,
  };
};
