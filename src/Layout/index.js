import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
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
