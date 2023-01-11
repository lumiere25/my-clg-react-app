import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/Projects/Projects.module.css";
// import { useContext } from "react";
// import AuthContext from "../store/auth-context";

const Projects = () => {
  // const { name, isLoggedIn, } = useContext(AuthContext); 

  return (
    <section className={styles.project_container}>
      <h1>Projects</h1>
      <p className={styles.p_texts}>I'll be documenting all my small projects here</p>
      <ul>
        <li className={styles.li_texts_1}>
          <NavLink to={`/todo-app`}>Todo List</NavLink>
        </li>
        <li className={styles.li_texts_2}>
          <NavLink to={`/food-gallery`}>Food Gallery</NavLink>
        </li>
        <li className={styles.li_texts_3}>
        <NavLink to={`/books`}>Books</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
