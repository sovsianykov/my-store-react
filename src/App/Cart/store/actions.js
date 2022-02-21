import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";
import { v4 as uuid } from "uuid";

export function addToCart(house) {
  return (dispatch) => {
    house.cartId = uuid();
    console.log(house.cartId);
    dispatch({
      type: ADD_TO_CART,
      payload: house,
    });
  };
}
export function removeFromCart(house) {
  return async (dispatch) => {
    await dispatch({
      type: REMOVE_FROM_CART,
      payload: house,
    });
  };
}
