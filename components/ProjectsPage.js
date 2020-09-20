import React from "react";
import ProjectCard from "./ProjectCard";

import styles from "../styles/Home.module.css";

const insta = "./gif/1.gif";
const covid = "./gif/2.gif";
const budget = "./gif/3.gif";

export default function ProjectsPage() {
  return (
    <>
      <h1 className={styles.projectHeading}>Projects</h1>
      <div className={styles.cards}>
        <ProjectCard
          name="Instagram Clone"
          image={insta}
          description=" Instagram Clone built with React JS and Material UI in frontend and used Firebase for the backend. Users can SignUp and log in to their accounts and post pictures with a caption. They can interact with other users by commenting on their posts. Also, posts in the right row are using the Instagram API to fetch a post from my real Instagram account."
          link="https://instagram-clone-react-d14b7.web.app/"
        />
        <ProjectCard
          name="COVID-19 Tracker"
          image={covid}
          description="COVID-19 Pandemic Tracer web application built with React JS.
              This project presents the global data in the form of no. of Infected, Recovered and Deceased along with the historical Line Chart data. Selecting the country from drop down list presents the data of that particular country along with thier respective Bar Graph."
          link="https://piyush55dude.github.io/covid19_tracer/"
        />
        <ProjectCard
          name="Budget Calculator"
          image={budget}
          description="Basic budget calculator app using functions of React Hooks.
              Each component of the app is updated by using useState hook and to not lose the data when we reload the webpage, I have used the browser's local storage to store the data in cache with the help of useEffect hook as well."
          link="https://piyush55dude.github.io/Budget-Calculator/"
        />
      </div>
    </>
  );
}
