import React from "react";

import { connect } from "react-redux";

import Card from "./Card";

const Media = ({ min, max }) => {
  return (
    <Card title="Média dos números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media);
