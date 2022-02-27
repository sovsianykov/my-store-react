import React from 'react';
import styles from './index.module.scss'

export const EmptyCart = () => {
    return (
        <section className={styles.cart}>
            <h1 className={styles.title}>There's no items</h1>
        </section>
    );
};

