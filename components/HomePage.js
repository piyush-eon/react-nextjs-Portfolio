import React from "react";
import styles from "../styles/Home.module.css";
import NameHeading from "./NameHeading";

export default function HomePage() {
  return (
    <div className={styles.headingfull}>
      <h1>Hey, My Name Is..</h1>
      <div className={styles.nameHeading}>
        <NameHeading />
      </div>
      <h2>I'm a Web Developer</h2>
    </div>
  );
}
