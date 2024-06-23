import React, { useContext } from 'react'
import CheckOut from './CheckOut'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import Swal from 'sweetalert2'



const CheckOutContainer = () => {

    const navigate = useNavigate()
    const { items, calcularTotalCompra, vaciarCarrito } = useContext(CartContext)

    const ordenCompleta = async (comprador) => {
        

        const order = {
            comprador,
            items: items,
            total: calcularTotalCompra(),
        }
   

    const db = getFirestore()
    const docRef = collection(db, "orders")
    await addDoc(docRef, order)
    Swal.fire({
        title: "Su compra fue realizada con éxito",
        text: "En breve nos contactaremos con usted",
        imageUrl: "https://soydelrojo.com/wp-content/uploads/2022/02/n-1.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Hinchada Independiente"
      });


    vaciarCarrito()
    navigate("/")
    }


    return (
        <CheckOut ordenCompleta={ordenCompleta} />
    )
}

export default CheckOutContainer