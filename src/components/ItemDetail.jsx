import React from 'react'
import ItemCounter from './ItemCounter'
import { CartContext } from '../context/cartContext'
import { useContext } from "react"

const ItemDetail = ({producto}) => {
const {agregarCarrito} = useContext(CartContext) 
const handleClick = () => agregarCarrito(producto)

  return (
       <div className="item-detail">
      <img src={producto.imagen} alt={producto.nombre} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{producto.nombre}</h3>
        <p className="item-description">{producto.descripcion}</p>
        <p>Stock: {producto.stock}</p>
        <ItemCounter stock={producto.stock} product={producto}/>
        <p className="item-price">${producto.precio}</p>
        <button className='add-to-cart' onClick={handleClick} >Agregar al carrito</button>

      </div>
    
    </div>


  )
}

export default ItemDetail