import { useState } from "react";

import Button from "../../../components/Button/Button"
import "./styles.css";

function Counter() {
  // type ArrayType<T> = T[];
  // numbers:ArrayType<number>  = [3, 4, 5] --> number[]
  const [counter, setCounter] = useState<number>(0);
 

  const onCounterMinus = () => {
    setCounter((prevState) => prevState - 1);
  };
  const onCounterPlus = () => {
    setCounter((prevState) => prevState + 1);
  };

  const onCounterClear = () => {
    setCounter(0);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" onButtonClick={onCounterMinus} id={0} />
      </div>
      <div className="result">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" onButtonClick={onCounterPlus} id={0} />
      </div>
      <div className="button-wrapper">
        <Button name="Clear" onButtonClick={onCounterClear} id={0} />
      </div>
    </div>
  );
}

export default Counter;
