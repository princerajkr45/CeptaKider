import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import { Facilities } from './Components/Facilities/Facilities'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Facilities />
    </>
  )
}

export default App
