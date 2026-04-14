// Упрощенный импорт для стилей
import "./styles.css";
import type { ButtonProps } from "./types";

function Button({ name, type = "button", onButtonClick}: ButtonProps) {

  return (
    <button className="my-button" type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

export default Button;
