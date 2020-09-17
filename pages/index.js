import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import ProjectsPage from "../components/ProjectsPage";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import AboutPage from "../components/AboutPage";

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
          <h1>About Me</h1>
          <AboutPage />
        </section>
        <section id="contact" className={styles.section}>
          <h1>Get In Touch</h1>
          <ContactPage />
        </section>
      </main>
    </div>
  );
}
