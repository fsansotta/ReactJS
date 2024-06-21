import { useEffect, useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './context/CartProvider'
import Cart from './components/Cart'
import { getFirestore, collection, getDocs } from "firebase/firestore"
import CheckOutContainer from './components/CheckOutContainer'

function App() {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    (async () => {
      const db = getFirestore()
      const docsRef = collection(db, "productos")
      const querySnapshot = await getDocs(docsRef)
      setProductos(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
    })()
  }, [])


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />         
          <Routes>
            <Route path="/" element={<ItemListContainer props={'a la tienda del Rey de Copas'} />} />
            <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer props={'a la tienda del Rey de Copas'} />} />     
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOutContainer/>} />
          </Routes>
        </BrowserRouter >
      </CartProvider>
    </>

  )
}

export default App
