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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            style={{ width: "32.5%" }}
            href="https://media-exp1.licdn.com/dms/document/C4E2DAQE7MhFvZWa6OQ/profile-treasury-document-pdf-analyzed/0/1607164046910?e=1608656400&v=beta&t=Ab3qP17QaNyN_kKgb7NukF1KH7bc4ggVdq3lI3ANP7Q"
            target="_blank"
          >
            <Button
              style={{ width: "100%" }}
              variant="contained"
              color="primary"
            >
              Resume
            </Button>
          </a>
          <a
            style={{ width: "32.5%" }}
            href="https://github.com/piyush-eon"
            target="_blank"
          >
            <Button
              style={{ width: "100%" }}
              variant="contained"
              color="secondary"
            >
              GitHub
            </Button>
          </a>
          <a
            style={{ width: "32.5%" }}
            href="https://www.linkedin.com/in/piyush-agarwal-440976179/"
            target="_blank"
          >
            <Button
              style={{ width: "100%" }}
              variant="outlined"
              color="primary"
            >
              More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
