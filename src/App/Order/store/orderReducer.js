import {
  ADD_ORDER,
  CLEAN_ORDERS,
  REMOVE_ORDER,
} from "@/App/Order/store/constants";

const initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case REMOVE_ORDER:
      return;
    case CLEAN_ORDERS:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
};
