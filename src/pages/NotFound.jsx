import React from 'react';
import styles from "../components/notFound/notfound.module.css";
import sad from "../components/Assets/sad.png";

const NotFound = () => {
  return (
    <div className={styles.notfound_container}>
    <img className={styles.img_face}src={sad} alt="sad face"/>
    <h1>Oops! This page does not exist!</h1>
    <p> You might want to try a different page...</p>
    </div>
  )
}

export default NotFound;