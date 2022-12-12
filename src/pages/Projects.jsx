import React from "react";
import { useMatch, NavLink } from "react-router-dom";

const Projects = () => {
  const { url } = useMatch();

  return (
    <section>
      <h1>Projects</h1>
      <p>I'll be documenting all my small projects here</p>
      <ul>
        <li>
          <NavLink to={`${url}/todo-app`}>Todo List</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/food-gallery`}>Food Gallery</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
