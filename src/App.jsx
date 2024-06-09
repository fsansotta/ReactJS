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
import Carrousel from './components/Carrousel'
import { CartContext } from './context/cartContext'
import CartProvider from './context/CartProvider'
import Cart from './components/Cart'


function App() {

  return (
    <>

      <CartProvider>
        <BrowserRouter>
          <NavBar />
          {/*   <Carrousel/> */}
          <Routes>
            <Route path="/" element={<ItemListContainer props={'a la tienda del Rey de Copas'} />} />
            <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
      

            <Route path="/categoria/:categoria" element={<ItemListContainer props={'a la tienda del Rey de Copas'} />} />
            <Route path="/contacto" element={<AboutUs />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter >
      </CartProvider>


    </>


  )
}

export default App
