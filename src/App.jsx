import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";
import { __addNumber, __minusNumber } from "./redux/modules/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  console.log(counter);

  const onClickPlus = () => {
    dispatch(__addNumber(count));
  };

  const onClickMinus = () => {
    dispatch(__minusNumber(count));
  };

  return (
    <div>
      <h1>{counter.number}</h1>

      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}> -</button>
    </div>
  );
}

export default App;
