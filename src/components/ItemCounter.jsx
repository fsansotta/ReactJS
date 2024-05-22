import React, { useState } from 'react'

const ItemCounter = ({stock}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if(count < stock){
    setCount(prevCount => prevCount + 1);
    }
  };

  const decrement = () => {
    if(count > 0){
    setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <h1>CANTIDAD {count}</h1>      
      <button type="button" class="btn btn-success" onClick={increment}>+</button>
      <button type="button" class="btn btn-success" onClick={decrement}>-</button>
    </div>
  );
  
}

export default ItemCounter