import { v4 } from "uuid";
import {animalData} from './data'
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import type { AnimalData } from "./type";
import { Lessons07Wrapper } from "./styles";


function Lesson07() {
// Получаем массив JSX элементов на основе массива данных с помощью
// метода map
  const animalsCards = animalData.map((animal: AnimalData) => {
    return (
      <AnimalCard 
        // key={animal.id}
        key ={v4()}
        name={animal.name}
        species={animal.species}
        img={animal.image}
      />
    );
  });
  return <Lessons07Wrapper>
    {animalsCards}
  </Lessons07Wrapper>;
}
export default Lesson07;