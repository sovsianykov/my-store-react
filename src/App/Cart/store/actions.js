import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

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