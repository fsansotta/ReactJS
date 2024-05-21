import { useState, useEffect } from 'react'
import Cargando from "./Cargando"
import ItemList from "./ItemList"
import Item from './Item'

const ItemListContainer = ({ props }) => {

  const [productos, setProductos] = useState([])


  useEffect(() => {


    const fetchData = async () => {

      try {
        const response = await fetch ("./productos.json")
        const data = await response.json ()
        setProductos(data)
      }
      catch(error) {
        console.log("El producto no se encuentra disponible en este momento, inténtelo nuevamente o más tarde", error)
      }

    }

    fetchData()

  }, [])

  console.log(productos)


  return (
    <div>
      <p>BIENVENIDO {props}</p>


    {productos.length == 0 ? <Cargando/> : <ItemList productos={productos}/>}
      
    </div>
      


  )
    
  }



export default ItemListContainer