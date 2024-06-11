import React, { useState } from 'react'
import { useCartContext } from '../context/cartContext';

const ItemCounter = ({stock, product}) => {
  const [count, setCount] = useState(1);
  const {agregarCarrito} = useCartContext()

  const increment = () => {
    if(count < stock){
    setCount(prevCount => prevCount + 1);
    }
  };

  const decrement = () => {
    if(count > 1){
    setCount(prevCount => prevCount - 1);
    }
  };


  

  return (
    <div className="item-counter">
      <div className="counter-display">{count}</div>
            <button className="counter-button" onClick={decrement}>-</button>
        <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
  
}

export default ItemCounter