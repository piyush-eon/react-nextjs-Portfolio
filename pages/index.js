import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import NameHeading from "./components/NameHeading";

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
            <div>
              <NameHeading />
            </div>
          </div>
        </section>
        <section id="services" className={styles.section}>
          <h1>Services</h1>
        </section>
        <section id="projects" className={styles.section}>
          <h1>Projects</h1>
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
