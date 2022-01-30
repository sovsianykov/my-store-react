import React from "react";
import styles from "./Navbar.module.scss";
import  AppBar  from "../../components/Navigation/AppBar";
import {BrandLogo} from "../../components/Navigation/BrandLogo";
import {Navigation} from "../../components/Navigation/Navigation";


 const Navbar = () => {
  return (
    <nav className={styles.navbar} >
        <AppBar>
            <BrandLogo/>
             <Navigation/>
        </AppBar>
    </nav>
  );
};
export default Navbar