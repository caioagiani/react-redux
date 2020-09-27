import React from "react";

import "./Interval.css";
import Card from "./Card";

export default (props) => {
  return (
    <Card title="Intervalo de números" red>
      <div className="Interval">
        <span>
          <strong>Min:</strong>
          <input type="number" value={0} readOnly></input>
        </span>
        <span>
          <strong>Máx:</strong>
          <input type="number" value={10} readOnly></input>
        </span>
      </div>
    </Card>
  );
};
