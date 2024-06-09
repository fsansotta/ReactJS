import { useState } from 'react';
import { CartContext } from './cartContext'
import Swal from 'sweetalert2'

function CartProvider({ children }) {
    const [items, setItems] = useState([])

    const agregarCarrito = (producto) => {
        const retorno = items.some(item => item.id === producto.id)

        Swal.fire({
            position: "center",
            icon: "success",
            title: "El producto ha sido agregado correctamente",
            showConfirmButton: false,
            timer: 1000
        });

        setItems([...items, producto])
    }

    const vaciarCarrito = () => { setItems([]) }

    return (
        <CartContext.Provider value={{ items, setItems, agregarCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
