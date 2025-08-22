import React, { useReducer } from "react";
type State = {
  count: number;
  step: number;
};
const initialState: State = { count: 0, step: 1 };

type Action =
  | { type: "inc" }
  | { type: "dec" }
  | { type: "defineCount"; payload: number }
  | { type: "defineStep"; payload: number }
  | { type: "reset" };
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "defineCount":
      return { ...state, count: action.payload };
    case "defineStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const DateCounter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date: Date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    /*     setCount((count) => count - step);
     */
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    /*     setCount((count) => count + step);
     */
  };

  const defineCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*     setCount(Number(e.target.value));
     */
    dispatch({ type: "defineCount", payload: Number(e.target.value) });
  };

  const defineStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*     setStep(Number(e.target.value));/*  */
    dispatch({ type: "defineStep", payload: Number(e.target.value) });
  };
  const reset = function () {
    dispatch({ type: "reset" });
    /*  setCount(0);
    setStep(1); */
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default DateCounter;
