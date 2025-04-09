import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nobar = () => {
  return (
    <div>
        
        <AppBar>
        <Toolbar>
            <Typography variant='h5'>MY App</Typography> &nbsp;
            <Link to='/Login'>
            <Button variant='contained' color='secondary'>Login</Button>
            </Link> &nbsp;
            <Link to="/s">
            <Button variant='contained' color='secondary'>Signup</Button>
            </Link>
            <Link to="/s">
            <Button variant='contained' color='secondary'>State</Button>
            </Link>
            <Link to="/Counter">
            <Button variant='contained' color='secondary'>Counter</Button>
            </Link>
            <Link to="/Display">
            <Button variant='contained' color='secondary'>Display</Button>
            </Link>
            <Link to="/Api">
            <Button variant='contained' color='secondary'>Api</Button>
            </Link>
            <Link to="/Cardget">
            <Button variant='contained' color='secondary'>Cardget</Button>
            </Link>
            
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nobar