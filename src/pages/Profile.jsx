import { useContext } from "react";
import AuthContext from "../store/auth-context";
import BasicButton from "../components/BasicButton/BasicButton";
import styles from "../components/Profile/Profile.module.css";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { logoutHandler, name, email } = useContext(AuthContext);

  const logoutHandlers = () => {
    Navigate("/home");
  }

  return (
    <section style={{ height: "100vh" }}>
      <h1 className={styles["settings"]}>User Settings</h1>
      <h2 className={styles["name_setting"]}>{name}</h2>
      <p className={styles["email_setting"]}>{email}</p>
      <BasicButton onClick={logoutHandler}>Sign Out</BasicButton>
    </section>
  );
};

export default Profile;