import { CartContext } from "../context/cartContext"
import { useContext } from "react"

function Cart() {
    const { items } = useContext(CartContext)
    const {vaciarCarrito} = useContext(CartContext)

    const handleClick =()=>{
        vaciarCarrito()
    }


    if (items.length) {
        return (<div>{items.map(item => <p key={item.id} >{item.nombre} cantidad {item.cantidad} </p>)}
            <button type="button" class="btn btn-danger" onClick={handleClick}>VACIAR CARRITO</button>
            <button type="button" class="btn btn-success">CONFIRMAR COMPRA</button>
        </div>)
    }


    return (
        <div>
            <p> No tienes productos seleccionados</p>
        </div>
    )
}

export default Cart