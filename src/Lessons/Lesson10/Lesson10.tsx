// Рядом с каждым пунктом, который добавлен должна появляться кнопка или крестик и при нажатии пункт удаляется

import { useState, type ChangeEvent } from "react";
import {
  Style,
  ToDolist,
  Title,
  InputElement,
  Button1,
  List,
  Button2,
} from "./styles";

function Lesson10() {
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const addTask = () => {
    if (inputValue.trim() === "") return;

    setTasks([...tasks, inputValue]);

    //Очищаем поле ввода
    setInputValue("");
  };

  const deleteTask = (indexToDelete: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Style>
      <Title>Lesson10</Title>
      <InputElement
        type="text"
        placeholder="Введите задание..."
        value={inputValue}
        onChange={inputChange}
      />
      <Button1 onClick={addTask}>ДОБАВИТЬ</Button1>
      <List>Список дел:</List>
      <ToDolist>
        {tasks.map((task, index) => (
          <p key={index}>
            <Button2 onClick={() => deleteTask(index)}>X</Button2>
            {index + 1} . {task}
          </p>
        ))}
      </ToDolist>
    </Style>
  );
}
export default Lesson10;
