import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import NameHeading from "./components/NameHeading";

const sample = "./sample.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <section id="home" className={styles.section}>
          <div className={styles.headingfull}>
            <h1>Hey, My Name Is..</h1>
            <div className={styles.nameHeading}>
              <NameHeading />
            </div>
            <h2>I'm a Web Developer</h2>
          </div>
        </section>
        {/* <section id="services" className={styles.section}>
          <h1>Services</h1>
        </section> */}
        <section id="projects" className={styles.section}>
          <h1 className={styles.projectHeading}>Projects</h1>
          <div className={styles.cards}>
            <ProjectCard
              name="Instagram Clone"
              image={sample}
              description=" Instagram Clone built with React JS and Material UI in frontend and used Firebase for the backend.
              Users can SignUp and log in to their accounts and post pictures with a caption. They can interact with other users by commenting on their posts.
              Also, posts in the right row are using the Instagram API to fetch a post from my real Instagram account."
            />
            <ProjectCard
              name="COVID-19 Tracker"
              image={sample}
              description="COVID-19 Pandemic Tracer web application built with React JS.
              This project presents the global data in the form of no. of Infected, Recovered and Deceased along with the historical Line Chart data. Selecting the country from drop down list presents the data of that particular country along with thier respective Bar Graph."
            />
            <ProjectCard
              name="Budget Calculator"
              image={sample}
              description="Basic budget calculator app using functions of React Hooks.
              Each component of the app is updated by using useState hook and to not lose the data when we reload the webpage, I have used the browser's local storage to store the data in cache with the help of useEffect hook as well."
            />
           
          </div>
        </section>
        <section id="about" className={styles.section}>
          <h1>About</h1>
        </section>
        <section id="contact" className={styles.section}>
          <h1>Contact</h1>
        </section>
      </main>
    </div>
  );
}
