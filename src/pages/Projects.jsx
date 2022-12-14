import React from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
 

  return (
    <section>
      <h1>Projects</h1>
      <p>I'll be documenting all my small projects here</p>
      <ul>
        <li>
          <NavLink to={`/todo-app`}>Todo List</NavLink>
        </li>
        <li>
          <NavLink to={`/food-gallery`}>Food Gallery</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
