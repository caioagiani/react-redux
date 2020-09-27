import React from "react";

import { connect } from "react-redux";

import "./Interval.css";

import Card from "./Card";

const Interval = ({ min, max }) => {
  return (
    <Card title="Intervalo de números" red>
      <div className="Interval">
        <span>
          <strong>Min:</strong>
          <input type="number" value={min} readOnly></input>
        </span>
        <span>
          <strong>Máx:</strong>
          <input type="number" value={max} readOnly></input>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    num: state.num,
    min: state.num.min,
    max: state.num.max,
  };
};

export default connect(mapStateToProps)(Interval);
