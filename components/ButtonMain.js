import React from "react";
import Link from "next/link";
import styles from "../styles/btn.module.css";

export default function ButtonMain({ children, href }) {
  return (
    <div className={styles.btnmain}>
      <Link href={href}>{children}</Link>
    </div>
  );
}
