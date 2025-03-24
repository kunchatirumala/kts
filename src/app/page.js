import Image from "next/image";
import styles from "./page.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import WhatsappForm from './WhatsappForm';
export default function Home() {
  console.log('sdjkd')
  return (
    <div className={styles.page} >
       <WhatsappForm/>
    </div>
  );
}
