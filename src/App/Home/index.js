import React from 'react';
import styles from './index.module.scss';
import house from '../../@assests/img/Home-PNG-Images.png'
import tree from '../../@assests/img/tree-clipart-transparent-15.png'
import car from '../../@assests/img/NicePng_carpng_3406826.png'

const Home = () => {
    return (
        <main className={styles.home}>
            <div className={styles.houseWrapper}>
                <img src={house} alt="house" className={styles.houseImg}/>
            </div>
            <div className={styles.treeWrapper}>
                <img src={tree} alt="house2" className={styles.treeImg}/>
            </div>
            <div className={styles.carWrapper}>
                <img src={car} alt="house3" className={styles.carImg}/>
            </div>
        </main>
    );
};

export default Home;