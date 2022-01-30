import React from "react";
import styles from "./Header.module.scss";
import { AppBar, BrandLogo, Navigation } from "../../components/Navigation";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <AppBar>
        <BrandLogo />
        <Navigation />
      </AppBar>
    </nav>
  );
};
