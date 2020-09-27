import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  num: (state, action) => {
    console.log(state, " ", action);
    return {
      min: 1,
      max: 10,
    };
  },
  name: (state, action) => {
    console.log(state, " ", action);
    return {
      name: "Caio Agiani",
      age: 21,
    };
  },
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
