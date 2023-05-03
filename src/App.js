import React from "react";

import "./App.css";
import PartOne from "./components/1/PartOne";
import PartTwo from "./components/2/PartTwo";
import PartThree from "./components/3/PartThree";

const App = () => {
  return (
    <div>
      <PartOne />
      <hr />
      <PartTwo />
      <hr />
      <PartThree />
    </div>
  );
};

export default App;
