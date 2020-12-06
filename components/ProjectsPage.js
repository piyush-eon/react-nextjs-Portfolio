import React from "react";
import ProjectCard from "./ProjectCard";

import styles from "../styles/Home.module.css";
import { projects } from "../data";

const insta = "./gif/1.gif";
const covid = "./gif/2.gif";
const budget = "./gif/3.gif";

export default function ProjectsPage() {
  return (
    <>
      <h1 className={styles.projectHeading}>Projects</h1>
      <div className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
}
