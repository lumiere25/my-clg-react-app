import Login from "./Login";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import styles from "../pages/Home.module.css";



const SignUp = () => {
  const { name, isLoggedIn, } = useContext(AuthContext);

  return (
    <section style={{ height: "100vh" }}>
      {isLoggedIn ? (
        <h1 className={styles.welcome}>Welcome back!! {name}</h1>
      ) : (
        <>
        <h1 className={styles.intro}>Welcome to Chrissa's Website!</h1>
        <Login /> 
        </>
      )}
   </section>
  )
}
    export default SignUp;

  