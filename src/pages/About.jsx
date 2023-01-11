import React from 'react'
import styles from "../components/About/About.module.css";
import myImage from "../components/Assets/chrissa.jpg";

const About = () => {
  return (
    <>
    <div>
    <img className={styles.about_img} src={myImage} alt="Chrissa" />
    </div>
    <div className={styles["about_container"]}>
    <h1>Some info about me: </h1>
    <p> I am a graduate in the field of Frontend Development which I hope to grow in knowledge and skill set to design beautiful welcoming sites for future clients.
     
     My dream is to combine both logic and UX/UI design to create asthetically pleasing and accessible user experience for clients.
     This portfolio stands as an opportunity to showcase React skills in both logic and design.
     
     As a side my hobbies include a bit of painting and drawing.
     </p>
    </div>
    </>
  )
}

export default About;