import React from "react";
import Link from "next/link";
import styles from "../styles/btn.module.css";

export default function ButtonPrim({ children, href }) {
  return (
    <div className={styles.btnprim}>
      <Link href={href}>{children}</Link>
    </div>
  );
}
