import { createSelector } from "reselect";
export const productsSelector = createSelector(
  (state) => state.housesReducer,
  (state) => {
    let items = [];
    const { houses, isLoading, error } = state.data;
    const { cart, currentPage } = state;
    const totalProducts = houses.length;
    for (const house of houses) {
      if (cart.includes(house)) {
        house.quantity = cart.filter((h) => h.id === house.id).length;
        items.push(house);
      } else {
        items.push(house);
      }
    }
    return {
      houses: items.filter(
        (h) => h.id - 1 >= (currentPage - 1) * 8 && h.id <= currentPage * 8
      ),
      totalProducts,
      isLoading,
      error,
    };
  }
);
