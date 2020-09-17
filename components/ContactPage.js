import React from "react";
import styles from "../styles/Contact.module.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default function ContactPage() {
  return (
    <div className={styles.root}>
      <form className={styles.form} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          //   placeholder="Enter Your Name"
          label="Name"
          required
        />
        <TextField
          id="standard-basic"
          //   placeholder="Enter Your Email"
          label="Email"
          required
        />
        <TextField
          id="standard-basic"
          label="Message"
          //   placeholder="Enter Your Message"
          required
          multiline
          rows="2"
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </form>
    </div>
  );
}
