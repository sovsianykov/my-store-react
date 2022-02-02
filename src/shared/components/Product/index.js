import React, { useCallback, useMemo } from "react";
import styles from "./Product.module.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../App/Cart/store/actions";
import cn from "classnames";

export const Product = ({ house }) => {
  const dispatch = useDispatch();
  const onClickHandler = useCallback(() => {
    house.quantity++;
    dispatch(addToCart(house));
  }, [dispatch, house]);

  const classNames = useMemo(
    () =>
      cn({
        [styles.product]: true,
        [styles.product_active]: house.quantity,
      }),
    [house.quantity]
  );

  return (
    <section className={classNames}>
      <div className={styles.imgWrapper}>
        <img src={house.img} alt={house.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{house.title}</span>
        <span > {`price:  $${house.price}`}</span>
        <div className={styles.cartPlusIcon} onClick={onClickHandler}>
          <AddShoppingCartIcon className={styles.icon} />
        </div>
      </div>
    </section>
  );
};
