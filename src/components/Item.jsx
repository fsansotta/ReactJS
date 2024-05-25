import React from 'react'
import {Link} from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <div className='cardPadre'>
            <div className="card" style= {{width:"18rem"}}>
                <img src={producto.imagen} class="card-img-top" alt="camiseta"></img>
                    <div class="card-body">
                        <h5 class="card-title">{producto.nombre}</h5>
                        <p class="card-text">{producto.precio}</p>
                       <Link to={`/producto/${producto.id}`}> <button class="btn btn-danger" style={{background:"#e10404"}}>Ver producto</button> </Link>
                    </div>
            </div> 
        </div>
    )
}

export default Item


