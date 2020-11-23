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
            <li>Especie: {character.species}</li>
            <li>Planeta de origen: {character.origin.name}</li>
            <li>Número de episodios: {character.episode.length}</li>
            <li>Estado del personaje: {character.status}</li>
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
