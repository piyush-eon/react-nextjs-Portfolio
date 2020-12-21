import React from "react";
import styles from "../styles/about.module.css";
import Button from "@material-ui/core/Button";

const me = "./images/me.png";

export default function AboutPage() {
  return (
    <div className={styles.main}>
      <img src={me} className={styles.image} />
      <div className={styles.sec}>
        <p>
          Piyush Agarwal is an Indian Javascipt Developer working on
          technologies like React JS, Material UI, Next JS, Node JS and Express
          JS. Born and raised in Kanpur, Uttar Pradesh. In his free time he
          likes to work as a freelance voice over artist on fiverr.
        </p>
        <table>
          <tr>
            <th>Name</th>
            <td>Piyush Agarwal</td>
          </tr>
          <tr>
            <th>Born</th>
            <td>22 December 1997</td>
          </tr>
          <tr>
            <th>Occupation</th>
            <td>Web Developer</td>
          </tr>
          <tr>
            <th>Hobbies</th>
            <td>Making Videos on Internet</td>
          </tr>
        </table>
        <a href="https://www.linkedin.com/in/piyush-agarwal-440976179/">
          <Button style={{ width: "100%" }} variant="outlined" color="primary">
            More
          </Button>
        </a>
      </div>
    </div>
  );
}
