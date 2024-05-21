import React from 'react'

const Item = ({ producto }) => {
    return (
        <div className='cardPadre'>


            <div className="card" style= {{width:"18rem"}}>
                <img src={producto.imagen} class="card-img-top" alt="camiseta"></img>
                    <div class="card-body">
                        <h5 class="card-title">{producto.nombre}</h5>
                        <p class="card-text">{producto.precio}</p>
                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>
            </div>

         
        </div>
    )
}

export default Item