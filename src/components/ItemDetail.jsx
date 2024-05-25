import React from 'react'
import ItemCounter from './ItemCounter'

const ItemDetail = ({ producto }) => {
  return (
       <div className="item-detail">
      <img src={producto.imagen} alt={producto.nombre} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{producto.nombre}</h3>
        <p className="item-description">{producto.descripcion}</p>
        <p>Stock: {producto.stock}</p>
        <ItemCounter stock={producto.stock}/>
        <p className="item-price">${producto.precio}</p>
        <button className="add-to-cart">Agregar al carrito</button>

      </div>
    
    </div>


  )
}

export default ItemDetail