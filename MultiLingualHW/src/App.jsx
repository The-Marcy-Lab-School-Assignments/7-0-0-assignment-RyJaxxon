import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import LangButtons from './components/LangButtons'
import FontButtons from './components/FontButtons'



function App() {
  const [greeting, setGreeting] = useState("Good Morning!")
  const [font, setFont] = useState(3.2)

  return (
    <>
      <FontButtons setFont = { setFont }/>
      <Header font = { font } greeting = { greeting }/>
      <LangButtons setGreeting = { setGreeting }/>
    </>
  )
}

export default App
