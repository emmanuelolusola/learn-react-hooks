import React, { useState } from "react";

import "./partFour.css";

const PartFour = () => {
  const [state, setState] = useState({
    department: "Biochemistry",
    level: 100,
    year: 2019,
  });
  const handleClick = (val) =>
    setState({
      ...state,
      level: state[val] + 100,
      year: state[val] + 1,
    });
  const { department, level, year } = state;
  return (
    <div>
      <h1>Object State Variables</h1>
      <h3>
        I'm a {level} level {department} student in {year}
      </h3>
      <div>
        <button onClick={handleClick.bind(null, "level")}>Increment</button>
      </div>
    </div>
  );
};

export default PartFour;
