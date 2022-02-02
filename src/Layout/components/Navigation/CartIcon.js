import React from "react";
import styles from "./Navigation.module.scss";
import { ShoppingCartRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import {cartSelector} from "../../../App/Cart/store/cartSelector";

export const CartIcon = () => {
  const count = useSelector(cartSelector).cart.length;
  return (
    <div className={styles.cartPlusIcon}>
      <ShoppingCartRounded className={styles.icon} />
      {count ? <div className={styles.itemsCount}>{count}</div> : ""}
    </div>
  );
};
