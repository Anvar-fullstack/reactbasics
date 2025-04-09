import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setName]=useState("LIONEL MESSI")
    const handleinput = (e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const submitHandler =()=>{
        setval(name)
    }
  return (
    <div>
        <Typography variant='h3'>welcome {name}</Typography>
        <br></br>
        <TextField variant='outlined' label="Type your name" onChange={handleinput}/>
    </div>
  )
}

export default StateBasics