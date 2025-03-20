"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log('sdjkd')
  return (
    <div className={styles.page} onClick={() => alert('hi')}>
    Next js project
    </div>
  );
}
