import React from 'react';
import styles from './index.module.scss'
import {CartProduct} from "../componens/CartProduct/CartProduct";
import {useSelector} from "react-redux";
import {cartSelector} from "../store/cartSelector";

const FilledCart = () => {
    const { sortedCart } = useSelector(cartSelector)
    console.log()
    return (
        <main className={styles.filledCart}>
            <div className={styles.leftBlock}>
                <div className={styles.products}>
                    { sortedCart.map(house => (<div className={styles.product} key={house.id}>
                        <CartProduct house={house}/>
                    </div>))}
                </div>
            </div>
        </main>
    );
};

export default FilledCart;