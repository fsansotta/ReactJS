import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {  BrowserRouter,  Routes,  Route,  Link,} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>

    <BrowserRouter>
    <NavBar/> 
      <Routes>
        <Route path="/" element={<ItemListContainer props = {'a la tienda del Rey de Copas'}/>} />
       
      </Routes>
    </BrowserRouter>



    </>
    

  )
}

export default App
