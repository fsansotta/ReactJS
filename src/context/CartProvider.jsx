import { useState } from 'react';
import { CartContext } from './cartContext'

function CartProvider({ children }) {
    const [items, setItems] = useState([])

    const agregarCarrito = (producto) => {
        const retorno = items.some(item => item.id === producto.id)

        if(retorno) return alert('El producto ya fue agregado') /* VER SWEET ALERT Y PONER ALGO COPADO */

        setItems([... items, producto])
    }
    return (
        <CartContext.Provider value={{items, setItems, agregarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider