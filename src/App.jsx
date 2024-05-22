import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemDetail from './components/ItemDetail'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer props={'a la tienda del Rey de Copas'} />} />
          <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer props={'a la tienda del Rey de Copas'} />} />
          <Route path="/contacto" element={<AboutUs/>} />       
        </Routes>
      </BrowserRouter>



    </>


  )
}

export default App
