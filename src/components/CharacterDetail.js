import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.scss";
import alive from "../images/mortyvivo.png";
import dead from "../images/mortymuerto.png";
import human from "../images/humana.png";
import alien from "../images/alien.png";

const CharacterDetail = (props) => {
  const selectedCharacter = props.characters
    .filter((character) => character.id === parseInt(props.match.params.id))
    .map((character) => {
      return (
        <article className="main__detail" key={character.id}>
          <Link
            className="main__detail-link"
            title="Volver a resultados"
            to="/"
          >
            Volver
          </Link>
          <img
            className="main__detail-img"
            src={character.image}
            alt={"Foto de " + character.name}
            title={"Foto de " + character.name}
          />
          <h2 className="main__detail-name">{character.name}</h2>
          <ul className="main__detail-list">
            <li className="main__detail-listItem">
              Especie: {character.species === "Human" ? " Humana" : " Alien"}
              <img
                className="detail-listItem-imgSpecie"
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
            <li className="main__detail-listItem">
              Planeta de origen:
              {character.origin.name === "Earth (Replacement Dimension)"
                ? " Tierra (Dimensión de reemplazo)"
                : character.origin.name === "Earth (C-137)"
                ? " Tierra (Dimensión C-137)"
                : character.origin.name === "Abadango"
                ? " Abadango"
                : " Origen desconocido"}
            </li>
            <li className="main__detail-listItem">
              Número de episodios: {character.episode.length}
            </li>
            <li className="main__detail-listItem">
              Estado del personaje:
              {character.status === "Alive"
                ? " Vivo"
                : character.status === "Dead"
                ? " Muerto"
                : " Desconocido"}
              <img
                className="detail-listItem-imgStatus"
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
  return selectedCharacter.length !== 0 ? (
    selectedCharacter
  ) : (
    <>
      <p className="main__detail-errorMessage">
        El personaje que buscas no existe
      </p>
      <Link
        className="main__detail-errorMessageLink"
        title="Volver a resultados"
        to="/"
      >
        Ir al listado de personajes
      </Link>
    </>
  );
};

CharacterDetail.propTypes = {
  characters: PropTypes.array,
  match: PropTypes.object,
};

export default CharacterDetail;
