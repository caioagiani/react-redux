import React from "react";
import "./App.css";

import Interval from "./components/Interval";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  return (
    <div className="App">
      <h1>Ex: React-Redux</h1>
      <div className="linha">
        <Interval></Interval>
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
