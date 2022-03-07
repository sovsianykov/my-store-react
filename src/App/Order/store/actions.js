import { v4 as uuid } from "uuid";
import { ADD_ORDER, CLEAN_ORDERS } from "@/App/Order/store/constants";
import httpService from "@/httpService";

export function addOrder(order) {
  return (dispatch) => {
    order.id = uuid();
    dispatch({
      type: ADD_ORDER,
      payload: order,
    });
  };
}
export function postOrder(order) {
    order.id = uuid();
  return async (dispatch) => {
    await httpService.post("/orders",order, dispatch);
  };
}
export function resetOrders() {
  return (dispatch) => {
    dispatch({
      type: CLEAN_ORDERS,
    });
  };
}
