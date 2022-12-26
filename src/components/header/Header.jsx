import React from 'react';
import { useContext } from 'react';
// import Button from '../Button/Button';
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import AuthContext from '../../store/auth-context';
import Styles from "./Header.module.css";
import AvatarButton from "../AvatarButton/AvatarButton";


const Header = () => {
const { isLoggedIn } = useContext(AuthContext);
let history = useNavigate();
  return (
    <header className={Styles.header}>
   <nav>
   <ul>
   <li>
   <NavLink className={Styles.active} to="/home">Home</NavLink>
   </li>
   <li>
   <NavLink className={Styles.active} to="/about">About</NavLink>
   </li>
   <li>
    <NavLink className={Styles.active} to="/projects">Projects</NavLink>
   </li>
   <li>
   <NavLink className={Styles.active}to="/contact">Contact</NavLink>
   </li>
   </ul>
   {isLoggedIn && (
     <button onClick={() => history("/profile")} />
   )}
   {isLoggedIn && (
   <button className={Styles['onsignup_btn']} onClick={() => history("/login")}>Login</button>
   )}
   {isLoggedIn && (
    <AvatarButton onClick={() => history("/profile")} />
  )}
   </nav>
   </header>
  )
}

export default Header;