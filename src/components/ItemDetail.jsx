import React from 'react'
import ItemCounter from './ItemCounter'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <p>{producto.descripcion}</p>
        <p>{producto.stock}</p>
        <img src={producto.imagen} alt={producto.nombre}/>
        <ItemCounter stock={producto.stock}/>
    </div>

  )
}

export default ItemDetail