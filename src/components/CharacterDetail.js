import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
            </li>
            <li>
              Planeta de origen:{" "}
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
              Estado del personaje:{" "}
              {character.status === "Alive"
                ? "Vivo"
                : character.status === "Dead"
                ? "Muerto"
                : "Desconocido"}
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
