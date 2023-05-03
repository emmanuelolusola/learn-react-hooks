import React, { useState } from "react";

const PartThree = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(100);
  const handleClick = () => {
    setQuantity(quantity + 1);
    setPrice(price + 100);
  };
  return (
    <div>
      <h1>Multiple State Variable</h1>
      <h3>
        I want {quantity} chocolate(s), which costs ${price}
      </h3>
      <button onClick={handleClick} className="click-button">
        Increment
      </button>
    </div>
  );
};

export default PartThree;
