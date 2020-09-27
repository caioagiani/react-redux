import React from "react";

import { connect } from "react-redux";

import Card from "./Card";

const Sorteio = ({ min, max }) => {
  const random = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card title="Sorteio de um número" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{random}</strong>
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

export default connect(mapStateToProps)(Sorteio);
