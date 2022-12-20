import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Button from "../components/Button/Button";

const Profile = () => {
  const { onLogout, name, email } = useContext(AuthContext);

  return (
    <section style={{ height: "100vh" }}>
      <h1>User Settings</h1>
      <h2>{name}</h2>
      <p>{email}</p>
      <Button onClick={onLogout}>Sign Out</Button>
    </section>
  );
};

export default Profile;