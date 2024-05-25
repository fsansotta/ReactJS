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
    <div className="item-counter">
      <div className="counter-display">{count}</div>
            <button className="counter-button" onClick={decrement}>-</button>
        <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
  
}

export default ItemCounter