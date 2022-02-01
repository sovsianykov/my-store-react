import {ADD_TO_CART, API_ACTION_FETCH, REMOVE_FROM_CART, SET_PAGE} from "./constants";
import httpService from "../../../httpService";

const fetchStart = () => ({
  type: API_ACTION_FETCH.START,
});

export function fetchHouses() {
  return async (dispatch) => {
    try {
      fetchStart();
      httpService.get("/products", dispatch);
    } catch (e) {
      dispatch({
        type: API_ACTION_FETCH.FAILURE,
        payload: e.message,
      });
    }
  };
}
export function addToCart(house) {
  return  (dispatch) => {
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
export function setPage(page) {
  return async (dispatch) => {
    await dispatch({
      type: SET_PAGE,
      payload: page,
    });
  };
}