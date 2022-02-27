import React, { memo, useCallback } from "react";
import styles from "./index.module.scss";
import { CartProduct } from "../componens/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../store/cartSelector";
import Button from "@/shared/components/Button";
import { cleanCart } from "@/App/Cart/store/actions";

const FilledCart = () => {
  const { sortedCart, totalAmount } = useSelector(cartSelector);
  const dispatch = useDispatch();
  const onCleanHandler = useCallback(() => {
    dispatch(cleanCart());
  }, [dispatch]);

  return (
    <main className={styles.filledCart}>
      <div className={styles.leftBlock}>
        <div className={styles.totalAmount}>
          <h3>{` Total amount $${totalAmount}`}</h3>
        </div>
        <div className={styles.products}>
          {sortedCart.map((house) => (
            <div className={styles.product} key={house.id}>
              <CartProduct house={house} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonsTool}>
        <Button onClick={onCleanHandler}>Clean The Cart</Button>
        <Button onClick={onCleanHandler}>Make the order</Button>
      </div>
    </main>
  );
};

export default memo(FilledCart);
