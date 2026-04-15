// Упрощенный импорт для стилей
import type { ButtonProps } from "./types";
import {MyButton} from "./styles";

function Button({ name, type = "button", onButtonClick}: ButtonProps) {

  return (
    <MyButton type={type} onClick={onButtonClick}>
      {name}
    </MyButton>
  );
}

export default Button;
