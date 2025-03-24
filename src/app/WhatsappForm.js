import Image from "next/image";
import styles from "./page.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Home() {
  console.log('sdjkd')
  return (
    <div>
        <Box
    //   component="form"
    //   sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    //   noValidate
      autoComplete="off"
      style= {{marginTop: '30%'}}
    >
        <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <div>
      <Button variant="contained">Send Message</Button>
      </div>
      <></>
    </Box>
    </div>
  );
}
