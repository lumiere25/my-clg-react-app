import React from 'react'
import Styles from "./contactDetails.module.css";

const ContactDetails = () => {
  return (
    <div className={Styles["main_info_container"]}>
    <h1>How to reach us:</h1>
    <p>Fill in our form or alternatively call us on: <a href="1300 555 476">1300 555 476</a></p>
    <p> Mail to:</p>
    </div>
  )
}

export default ContactDetails;

