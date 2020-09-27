import React from "react";

import { connect } from "react-redux";

import Card from "./Card";

const Soma = ({ min, max }) => {
  return (
    <Card title="Soma dos números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma);
