import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <label for="username">USERNAME</label>
            <input type="text" id="username"></input>
            <br></br>
            <br></br>
            <label for="password">PASSWORD</label>
            <input type="text" id="paswword"></input>
            <br></br>
            <br></br>
            <input type="submit" value="submit"></input>
            <br></br>
            <br></br>
            <TextField label="username" variant="outlined"/>
        </form>
    </div>
  )
}

export default Login