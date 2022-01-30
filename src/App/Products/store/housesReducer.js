import { products } from "./utils";
import { API_ACTION_FETCH } from "./constants";

const initialState = {
  data: products,
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
    default:
      return state;
  }
};
