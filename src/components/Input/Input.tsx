import { InputComponent, InputElement, Label } from "./styles";
import type { InputProps } from "./types";

function Input({
  name,
  label,
  type = "text",
  id,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <InputComponent>
      <Label htmlFor={id}>{label}</Label>
      <InputElement
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputComponent>
  );
}
export default Input;
