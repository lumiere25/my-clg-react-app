import React from 'react';
import { NavLink } from "react-router-dom";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles.header}>
   <nav>
   <ul>
   <li>
   <NavLink className={Styles.active} to="/">Home</NavLink>
   </li>
   <li>
   <NavLink className={Styles.active} to="/about">About</NavLink>
   </li>
   <li>
   <NavLink className={Styles.active}to="/contact">Contact</NavLink>
   </li>
   </ul>
   </nav>
   </header>
  )
}

export default Header;