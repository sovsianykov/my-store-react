import React from "react";
import  Navbar  from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import styles from './mainLayout.module.scss'

export const MainLayout = ({children}) => {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
        {children}
    </div>
  );
};
