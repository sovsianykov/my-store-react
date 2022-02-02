import {createSelector} from "reselect";

export const cartSelector = createSelector(
    state => state.cartReducer.cart ,
    (cart) => {
        const totalAmount = cart.reduce((acc,house) =>acc + house.price,0)
        return {
            cart,
            totalAmount
        }
    }
)