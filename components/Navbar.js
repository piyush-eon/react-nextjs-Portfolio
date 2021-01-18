import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ButtonMain from "./ButtonMain";
import ButtonPrim from "./ButtonPrim";

const logo = "./images/logo.png";

export default function Navbar() {
  const [Nav, setNav] = useState(0);
  const handleClick = () => {
    if (Nav == 0) {
      document.getElementById("listnav").style.cssText = "display:flex; ";
      setNav(1);
      document.getElementById("line1").style.cssText =
        "transform: rotate(45deg); transition: all 0.3s; ";
      document.getElementById("line3").style.cssText = "display:none";
      document.getElementById("line2").style.cssText =
        "transform: rotate(-45deg); margin-top:-7px; transition: all 0.3s;";
    } else {
      document.getElementById("listnav").style.cssText =
        "display:none;";
      document.getElementById("line1").style.cssText =
        "transform: rotate(0deg); transition: all 0.3s;";
      document.getElementById("line2").style.cssText = "display:block; transition: all 0.3s;";
      document.getElementById("line3").style.cssText =
        "transform: rotate(0deg); transition: all 0.5s;";
      setNav(0);
    }
  };
  return (
    <>
      <div className={styles.nav}>
        <Link href="">
          <img src={logo} alt="logo" className={styles.img} />
        </Link>
        <div className={styles.hamburger} onClick={handleClick}>
          <div className={styles.line} id="line1"></div>
          <div className={styles.line} id="line2"></div>
          <div className={styles.line} id="line3"></div>
        </div>
        <div className={styles.navkeys}>
          <ul className={styles.list} id="listnav">
            <li>
              <ButtonMain href="#home">Home</ButtonMain>
            </li>
            <li>
              <ButtonMain href="#projects">Projects</ButtonMain>
            </li>
            <li>
              <ButtonMain href="#about">About</ButtonMain>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <ButtonPrim href="#contact">Contact Me</ButtonPrim>
        </div>
      </div>
    </>
  );
}
