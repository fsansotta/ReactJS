import { useState, useEffect, useContext} from 'react'
import Cargando from "./Cargando"
import ItemList from "./ItemList"
import Item from './Item'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

const ItemListContainer = ({ props }) => {

  const [productos, setProductos] = useState([])
  const {categoria} = useParams()
  const items = useContext(CartContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch ("../productos.json")
        const data = await response.json ()   
        if(categoria){
          const productosFiltrados = data.filter((producto) => producto.categoria === categoria)
          setProductos(productosFiltrados)
        } else{
          setProductos(data)
        }
      }
      catch(error) {
        console.log("El producto no se encuentra disponible en este momento, inténtelo nuevamente o más tarde", error)
      }
    }
    fetchData()
  }, [categoria])

  return (
    <div>
      <p>BIENVENIDO {props}</p>
    {productos.length == 0 ? <Cargando/> : <ItemList productos={productos}/>}
    </div>
  )
 }

      export default ItemListContainer