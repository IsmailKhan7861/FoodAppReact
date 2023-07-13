import React from "react";
import styles from "./Header.module.css";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) =>{
    return (
       <Fragment>
         <header className={styles.header}>
            <h1>ReactMeals</h1>
             <HeaderCartButton />
         </header>

         <div className={styles["main-image"]}>
            <img src = {mealsImage} alt = "Table full of Food"/>
         </div>
       </Fragment>
    )
}
export default Header