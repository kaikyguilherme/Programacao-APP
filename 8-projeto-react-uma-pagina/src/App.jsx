import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <h1>MEU PROJETO</h1>
        <HomePage />
      </main>
      <Rodape />
    </>
  )
}

export default App
