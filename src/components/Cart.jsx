import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/cartContext"
import { useContext } from "react"

function Cart() {
    const { items } = useContext(CartContext)
    const { vaciarCarrito } = useContext(CartContext)
    const { eliminarProducto } = useContext(CartContext)
    const { calcularTotalCompra } = useContext(CartContext)

    const navigate = useNavigate()

    const handleClick = () => {
        vaciarCarrito()
    }

    const handleClickDos = (id) => {
        eliminarProducto(id)
    }



    if (items.length) {
        return (<div>{items.map(item =>
            <div key={item.id} className="cart-item">
            <div className="product-info">
                <img src={item.imagen} alt={item.nombre} className="product-image" />
                <div className="product-details">
                    <p className="product-name">{item.nombre}</p>
                    <p className="price">Precio unitario: ${item.precio}</p>
                </div>
            </div>
            <div className="item-details">
                <p className="quantity">Cantidad: {item.cantidad}</p>
                <p className="total-price">Total: ${item.precio * item.cantidad}</p>
                <button type="button" className="remove-button" onClick={() => handleClickDos(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                    </button>
                </div>
            </div>)}
            <p className="totalDetail">TOTAL DE SU COMPRA: $ {calcularTotalCompra()} </p>
            <button type="button" class="btn btn-danger" onClick={handleClick}>VACIAR CARRITO</button>
            <button type="button" class="btn btn-success" onClick={() => navigate("/checkout")}>CONFIRMAR COMPRA</button>

        </div>)
    }


    return (
        <div>
            <p> No tienes productos seleccionados</p>
        </div>
    )
}

export default Cart