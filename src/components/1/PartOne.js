import React, { useState } from "react";

import "./partOne.css";

const PartOne = () => {
  const [name] = useState("Emmanuel Olusola");
  return (
    <div>
      <h1>Declare State Variable</h1>
      <h3>I am {name}!</h3>
    </div>
  );
};

export default PartOne;
