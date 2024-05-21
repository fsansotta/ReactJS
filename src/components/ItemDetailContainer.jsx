import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import Cargando from './Cargando'

const ItemDetailContainer = ({id}) => {
    const [producto, setProducto] = useState([null])

    useEffect(() => {
      const fecthData = async () => {
        try {
          const response = await fetch("./productos.json")
          const data = await response.json()
          const producto = data.find((producto) => producto.id === id)
          setProducto(producto)

        } catch (error) {
          console.log("El producto no se encuentra disponible en este momento, inténtelo nuevamente o más tarde" + error);

        }
      }
    fecthData()

    }, [id])

  return (
    <div>{
        producto
        ? 
        <ItemDetail producto={producto}/> : <Cargando/>}</div>
  )
}

export default ItemDetailContainer