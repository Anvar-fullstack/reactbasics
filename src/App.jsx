import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/signup'
import Nobar from './components/Nobar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './StateBasics'
import Counter from './Counter'
import Display from './Display'
import Api from '../Api'
import Cardget from '../Cardget'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <h1>Hello</h1>
      <Nobar/>
      <StateBasics/>
      
      
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/StateBasics' element={<StateBasics/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/Display' element={<Display/>}/>
        <Route path='/Api' element={<Api/>}/>
        <Route path='/Cardget' element={<Cardget/>}/>

        
      </Routes>
      
      
    </>
  )
}

export default App
