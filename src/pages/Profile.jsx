import { useContext } from "react";
import AuthContext from "../store/auth-context";
import styles from "../components/Profile/Profile.module.css";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const {  name, email } = useContext(AuthContext);

  return (
    <section style={{ height: "100vh" }}>
      <h1 className={styles["settings"]}>User Settings</h1>
      <h2 className={styles["name_setting"]}>{name}</h2>
      <p className={styles["email_setting"]}>{email}</p>
   
    </section>
  );
};

export default Profile;