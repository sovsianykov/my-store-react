
import { v4 as uuid } from "uuid";
import {ADD_ORDER, CLEAN_ORDERS} from "@/App/Order/store/constants";

export function addOrder(order) {
    return dispatch => {
        order.id = uuid();
        dispatch({
            type: ADD_ORDER,
            payload: order,
        });
    };
}
export function resetOrders() {
    return dispatch => {
        dispatch({
            type: CLEAN_ORDERS,
        });
    };
}