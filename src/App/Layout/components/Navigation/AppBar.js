import React from "react";
import styles from "./Navigation.module.scss";
import {BrandLogo} from "./BrandLogo";

  const AppBar = ({children}) => {
  return (
    <div className={styles.appBar}>
      {children}
    </div>
  );
};
export default AppBar