import { products } from "./utils";
import {ADD_TO_CART, API_ACTION_FETCH, SET_PAGE} from "./constants";

const initialState = {
  data: products,
  cart: [],
  currentPage: 1,
};

export const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_ACTION_FETCH.START:
      return {
        ...state,
        data: { ...products, isLoading: true },
      };
    case API_ACTION_FETCH.SUCCESS:
      return {
        ...state,
        data: { ...products, isLoading: false, houses: action.payload },
      };
    case API_ACTION_FETCH.FAILURE:
      return {
        ...state,

        data: { ...products, isLoading: false, error: action.payload },
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload ,
      };
    default:
      return state;
  }
};
