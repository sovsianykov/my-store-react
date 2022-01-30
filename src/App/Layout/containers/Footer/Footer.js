import React from "react";
import styles from "./Footer.module.scss";
import  AppBar  from "../../components/Navigation/AppBar";
import { Navigation } from "../../components/Navigation/Navigation";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AppBar>
        <Navigation />
      </AppBar>
    </footer>
  );
};
