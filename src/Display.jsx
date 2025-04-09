import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Display = () => {
    var[x,setx] = useState();
    const inpt =()=>{
        setx('Result')
    }
    const inpt2 =()=>{
        setx('Angular')
    }
    const inpt3 =()=>{
        setx('Next')
    }
  return (
        <div>
            <br></br>
            <Typography variant='h3'>Welcome to {x}</Typography>
            <br></br>
            <Button variant='contained' color='primary' onClick={inpt}>Result</Button> &nbsp;
            <Button variant='contained' color='secondary' onClick={inpt2}>Angular</Button> &nbsp;
            <Button variant='contained' color='success' onClick={inpt3}>Next</Button>
        </div>
  )
}

export default Display