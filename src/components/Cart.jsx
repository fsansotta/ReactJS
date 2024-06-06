import { CartContext } from "../context/cartContext"
import { useContext } from "react"

function Cart () {
    const {items} = useContext(CartContext)

   
    if (items.length) {
    return (<div>{items.map(item =><p key={item.id} >{item.nombre} cantidad {item.cantidad} </p>)}</div>) 
    }


return(
<div>No tienes productos seleccionados</div>
)
}

export default Cart