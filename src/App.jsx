import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Facilities } from './Components/Facilities'
import { About } from './Components/About'
import Action from './Components/Action'
import Classes from './Components/Classes'
import Appointment from './Components/Appointment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Facilities />
      <About />
      <Action />
      <Classes />
      <Appointment />
    </>
  )
}

export default App
