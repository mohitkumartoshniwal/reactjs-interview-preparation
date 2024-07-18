import { useReducer } from "react";

const initialState = {
  counter: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    }
    default:
      return state;
  }
};

const Reducer1 = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  function increment() {
    dispatch({
      type: "INCREMENT",
      payload: 1,
    });
  }

  function decrement() {
    dispatch({
      type: "DECREMENT",
      payload: 1,
    });
  }

  return (
    <div className="container">
      <div>{state.counter}</div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Reducer1;
