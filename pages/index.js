import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";
import HomePage from "./components/HomePage";

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
          <HomePage />
        </section>
        <section id="projects" className={styles.section}>
          <ProjectsPage />
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
