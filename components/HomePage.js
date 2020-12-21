import { Button } from "@material-ui/core";
import React from "react";
import styles from "../styles/Home.module.css";
import ButtonPrim from "./ButtonPrim";
import NameHeading from "./NameHeading";

export default function HomePage() {
  return (
    <div className={styles.headingfull}>
      <h1 className={styles.h1main}>Hey, My Name Is..</h1>
      <div className={styles.nameHeading}>
        <NameHeading />
      </div>
      <h2 className={styles.h2main}>I'm a Web Developer</h2>
      <div
        style={{
          paddingTop: 50,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        className={styles.learnmore}
      >
        <ButtonPrim href="#projects">Learn More</ButtonPrim>
      </div>
    </div>
  );
}
