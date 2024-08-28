import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApplicationViews } from './Components/ApplicationViews.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApplicationViews/>
  )
}

export default App
