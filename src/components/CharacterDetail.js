import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import alive from "../images/mortyvivo.png";
import dead from "../images/mortymuerto.png";
import human from "../images/humana.png";
import alien from "../images/alien.png";

const CharacterDetail = (props) => {
  const selectedCharacter = props.characters
    .filter((character) => character.id === parseInt(props.match.params.id))
    .map((character) => {
      return (
        <article key={character.id}>
          <Link to="/">Volver</Link>
          <img
            src={character.image}
            alt={"Foto de " + character.name}
            title="Nombre"
          />
          <h2>{character.name}</h2>
          <ul>
            <li>
              Especie: {character.species === "Human" ? "Humana" : "Alien"}
              <img
                title={
                  character.species === "Human"
                    ? "El personaje es humano"
                    : "El personaje es un alien"
                }
                alt={
                  character.species === "Human"
                    ? "El personaje es humano"
                    : "El personaje es un alien"
                }
                src={character.species === "Human" ? human : alien}
              />
            </li>
            <li>
              Planeta de origen:
              {character.origin.name === "Earth (Replacement Dimension)"
                ? "Tierra (Dimensión de reemplazo)"
                : character.origin.name === "Earth (C-137)"
                ? "Tierra (Dimensión C-137)"
                : character.origin.name === "Abadango"
                ? "Abadango"
                : "Origen desconocido"}
            </li>
            <li>Número de episodios: {character.episode.length}</li>
            <li>
              Estado del personaje:
              {character.status === "Alive"
                ? "Vivo"
                : character.status === "Dead"
                ? "Muerto"
                : "Desconocido"}
              <img
                title={
                  character.status === "Alive"
                    ? "El personaje está vivo"
                    : character.status === "Dead"
                    ? "El personaje está muerto"
                    : "Se desconoce si está vivo o muerto"
                }
                alt={
                  character.status === "Alive"
                    ? "El personaje está vivo"
                    : character.status === "Dead"
                    ? "El personaje está muerto"
                    : "Se desconoce si está vivo o muerto"
                }
                src={character.status === "Alive" ? alive : dead}
              />
            </li>
          </ul>
        </article>
      );
    });
  return selectedCharacter;
};

CharacterDetail.propTypes = {
  characters: PropTypes.array,
  match: PropTypes.object,
};

export default CharacterDetail;
