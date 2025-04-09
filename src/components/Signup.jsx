import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>SIGN UP</h1>
        <TextField label="username" variant="outlined"/>
        <br></br>
        <br></br>
        <Button variant="contained" color="success">SUBMIT</Button>

    </div>
  )
}

export default Signup