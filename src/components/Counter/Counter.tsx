import { useState } from "react";
import Button from "../Button/Button";
import { ButtonWrapper, CounterWrapper, ResultContainer } from "./styles";

function Counter() {
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
    <CounterWrapper>
      <ButtonWrapper>
        <Button name="-" onButtonClick={onCounterMinus} />
      </ButtonWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonWrapper>
        <Button name="+" onButtonClick={onCounterPlus}  />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button name="Clear" onButtonClick={onCounterClear}  />
      </ButtonWrapper>
    </CounterWrapper>
  );
}

export default Counter;
