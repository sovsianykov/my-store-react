import React from "react";
import styles from "./Navigation.module.scss";
import logo from "../../../@assests/img/logo.png";
import { Link } from "react-router-dom";

export const BrandLogo = () => {
  return (
    <Link to="/" className={styles.brandLogo}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <h1 className={styles.title}>Houses of your Dream</h1>
    </Link>
  );
};