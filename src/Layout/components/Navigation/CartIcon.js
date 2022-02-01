import React from "react";
import styles from "./Navigation.module.scss";
import { ShoppingCartRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";

export const CartIcon = () => {
  const count = useSelector((state) => state.housesReducer.cart.length);
  return (
    <div className={styles.cartPlusIcon}>
      <ShoppingCartRounded className={styles.icon} />
      {count ? <div className={styles.itemsCount}>{count}</div> : ""}
    </div>
  );
};
