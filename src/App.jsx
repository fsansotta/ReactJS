import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {  BrowserRouter,  Routes,  Route,  Link,} from "react-router-dom"
/* import Home from './components/Home'
import Users from './components/Users' */

function App() {

  return (
    <>

    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter> */}


    <><NavBar/> 
    <ItemListContainer props = {'a la tienda del Rey de Copas'}/></>

    </>

    
  )
}

export default App
