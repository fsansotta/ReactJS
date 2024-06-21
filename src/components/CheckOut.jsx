import React, { useState } from 'react'

const CheckOut = ({ ordenCompleta }) => {

    const [nombreComprador, setNombreComprador] = useState("")
    const [telefonoComprador, setTelefonoComprador] = useState("")
    const [emailComprador, setEmailComprador] = useState("")



    const handleCompleteOrder = async (e) => {
        e.preventDefault()
        const comprador = {
            nombre: nombreComprador,
            telefono: telefonoComprador,
            email: emailComprador,
        }

        await ordenCompleta(comprador)
    }



    return (

        <form className='listadoDatos' onSubmit={(e) => handleCompleteOrder(e)}>
            <input type="text" value={nombreComprador} onChange={(e) => setNombreComprador(e.target.value)} placeholder='Ingrese su nombre' required />
            <input type="number" value={telefonoComprador} onChange={(e) => setTelefonoComprador(e.target.value)} placeholder='Ingrese su número de teléfono' required/>
            <input type="email" value={emailComprador} onChange={(e) => setEmailComprador(e.target.value)} placeholder='Ingrese su casilla de email' required/>
            <button type='submit'>Finalizar compra</button>
        </form>

    )
}

export default CheckOut