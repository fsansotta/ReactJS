import React, { useContext } from 'react'
import CheckOut from './CheckOut'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/cartContext'




const CheckOutContainer = () => {

    const navigate = useNavigate()
    const { cart, totalPricerCart, clearCart } = useContext(CartContext)

    const ordenCompleta = async (comprador) => {

        const order = {
            comprador,
            items: cart,
            total: totalPricerCart,
        }
   

    const db = getFirestore()
    const docRef = collection(db, "orders")
    await addDoc(docRef, order)
    clearCart()
    navigate("/orders")
    }


    return (
        <CheckOut ordenCompleta={ordenCompleta} />
    )
}

export default CheckOutContainer