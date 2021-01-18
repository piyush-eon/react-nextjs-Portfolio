import React, { useState } from "react";
import styles from "../styles/contact.module.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);

    emailjs
      .sendForm(
        "gmail",
        "template_qk7xaex",
        e.target,
        "user_oyqYsJ093ctYLVat6K5KF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        alert("I will reach out to you very soon 👍");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    if (loader === false) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className={styles.root}>
      <form
        className={styles.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          //   placeholder="Enter Your Name"
          label="Name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          required
        />
        <TextField
          //   placeholder="Enter Your Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />
        <TextField
          label="Message"
          //   placeholder="Enter Your Message"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          multiline
          rows="2"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ background: loader === true ? "#ccc" : "" }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
