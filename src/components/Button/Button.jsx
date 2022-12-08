import React from 'react';
import Styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={Styles.button}>
     {props.children}
    </button>
  )
}

export default Button;