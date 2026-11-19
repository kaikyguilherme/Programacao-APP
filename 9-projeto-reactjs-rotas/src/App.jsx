import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import Servicos from './pages/Servicos'
import Endereco from './pages/Endereco'
import Suporte from './pages/Suporte'
import './App.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/servicos' element={<Servicos />} />
            <Route path='/sobre-nos' element={<SobreNos />} />
            <Route path='/endereco' element={<Endereco />} />
            <Route path='/suporte' element={<Suporte />} />
          </Routes>
          </main>      
          <Footer />
      </BrowserRouter>
    </>
  )
}


