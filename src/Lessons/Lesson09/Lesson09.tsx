import { useState, type ChangeEvent } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { InputsContainer, Lesson09Wrapper, Result } from "./styles";

function Lesson09() {
  // Контролируемый компонент - компонент значение которого мы храним в локальном хранилище (state)
  // и изменяем его с помощи функции изменения состояния. Эти значение мы передаём
  // в атрибуты value и onChange в элемент инпут

  const [exampleValue, setExampleValue] = useState<string>("");
   const [result, setResult] = useState<string>("");

   const onChangeResult = () => {
    setResult(exampleValue);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExampleValue(event.target.value);
  };

  return (
    <Lesson09Wrapper>
      <Button name="send" />
      <Button name="Delete" isDanger />
      <InputsContainer>
        <Input name="Example" />
        <Input
          name="Example2"
          label="Control"
          placeholder="Enter value"
          id="ex_2"
          value={exampleValue}
          onChange={onInputChange}
        />
        <Button name="Send" onButtonClick={onChangeResult} />
      </InputsContainer>
         <Result>{result}</Result>
    </Lesson09Wrapper>
  );
}
export default Lesson09;
