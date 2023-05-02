import React, { useState } from "react";

const PartTwo = () => {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    if (count >= 30) return 0;
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Update State Variable</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default PartTwo;
