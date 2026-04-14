import "./styles.css";
import {animalData} from './data'
import AnimalCard from "../../AnimalCard/AnimalCard";
import type { AnimalData } from "./type";

function Lesson07() {
// Получаем массив JSX элементов на основе массива данных с помощью
// метода map
  const animalsCards = animalData.map((animal: AnimalData) => {
    return (
      <AnimalCard 
        key={animal.id}
        name={animal.name}
        species={animal.species}
        img={animal.image}
      />
    );
  });
  return <div className="lesson07-wrapper">
    {animalsCards}
  </div>;
}
export default Lesson07;