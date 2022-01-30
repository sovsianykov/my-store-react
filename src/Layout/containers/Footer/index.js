import React from "react";
import styles from "./Footer.module.scss";
import { AppBar, Navigation } from "../../components/Navigation";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AppBar>
        <Navigation />
      </AppBar>
    </footer>
  );
};
