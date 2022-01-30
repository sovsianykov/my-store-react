import React from "react";
import { Header } from "./containers/Header";
import { Footer } from "./containers/Footer";
import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
