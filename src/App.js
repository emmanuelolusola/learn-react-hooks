import React from "react";

import "./App.css";
import PartOne from "./components/1/PartOne";
import PartTwo from "./components/2/PartTwo";
import PartThree from "./components/3/PartThree";
import PartFour from "./components/4/PartFour";

const App = () => {
  return (
    <div>
      <PartOne />
      <hr />
      <PartTwo />
      <hr />
      <PartThree />
      <hr />
      <PartFour />
    </div>
  );
};

export default App;
