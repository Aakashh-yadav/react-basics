import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvder from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvder>
        <h1>Hello Bhai kya haal hai</h1>
    </UserContextProvder>
  )
}

export default App
