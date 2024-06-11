import { useState } from 'react';
import { CartContext } from './cartContext'
import Swal from 'sweetalert2'

function CartProvider({ children }) {
    const [items, setItems] = useState([])
/* 
    const agregarCarrito = (producto, cantidad) => {
        const existe = items.some(item => item.id === producto.id)

        
        Swal.fire({
            position: "center",
            icon: "success",
            title: "El producto ha sido agregado correctamente",
            showConfirmButton: false,
            timer: 1000
        });

        setItems([...items, producto])
    }
 */

    const agregarCarrito = (producto, cantidad) => {
        const existe = items.find(item => item.id === producto.id);
    
        if (existe) {
            setItems(items.map(item => 
                item.id === producto.id 
                ? { ...item, cantidad: item.cantidad + cantidad } 
                : item
            ));
        } else {
            setItems([...items, { ...producto, cantidad }]);
        }
    
        Swal.fire({
            position: "center",
            icon: "success",
            title: "El producto ha sido agregado correctamente",
            showConfirmButton: false,
            timer: 1000
        });
    }

    function eliminarProducto(id) {
        
        setItems(items.filter(producto => producto.id !== id))
    }


    const vaciarCarrito = () => { setItems([]) }

    return (
        <CartContext.Provider value={{ items, setItems, agregarCarrito, vaciarCarrito, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
