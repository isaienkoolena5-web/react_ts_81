import { AnimalCardWrapper, AnimalName, AnimalSptcies } from "./styles";
import type { AnimalCardProps } from "./types";


function AnimalCard({ name, species, img }:AnimalCardProps ) {
  return (
    <AnimalCardWrapper >
      <AnimalName>{name}</AnimalName>
      <AnimalSptcies>{species}</AnimalSptcies>
      <img src={img} alt = {name}/>
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
