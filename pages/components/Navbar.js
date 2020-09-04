import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ButtonMain from "./ButtonMain";
import ButtonPrim from "./ButtonPrim";

const logo = "./images/logo.png";

export default function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <Link href="">
          <img src={logo} alt="logo" className={styles.img} />
        </Link>
        <div className={styles.navkeys}>
          <ul className={styles.list}>
            <li>
              <ButtonMain href="#services">Services</ButtonMain>
            </li>
            <li>
              <ButtonMain href="#projects">Projects</ButtonMain>
            </li>
            <li>
              <ButtonMain href="#about">About</ButtonMain>
            </li>
            <li>
              <ButtonPrim href="#contact">Contact Me</ButtonPrim>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
