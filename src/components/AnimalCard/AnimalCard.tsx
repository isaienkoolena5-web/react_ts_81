import "./styles.css";
import type { AnimalCardProps } from "./types"

function AnimalCard({ name, species, img }:AnimalCardProps ) {
  return (
    <div className="animal-card-wrapper">
      <h3>{name}</h3>
      <div>{species}</div>
      <img src={img} />
    </div>
  );
}

export default AnimalCard;
