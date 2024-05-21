import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <p>{producto.descripcion}</p>
        <img src={producto.imagen} alt={producto.nombre}/>
    </div>

  )
}

export default ItemDetail