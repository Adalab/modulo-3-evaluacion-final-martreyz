import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterCard.scss";

const CharacterCard = (props) => {
  return (
    <Link
      title="Ir a detalle del personaje"
      className="main__list-link"
      to={"/character/" + props.id}
    >
      <article className="main__list-article">
        <img
          className="main__list-articleImg"
          src={props.image}
          alt={"Fotografía de " + props.name}
          title={"Fotografía de " + props.name}
        />
        <h2 className="main__list-articleName">{props.name}</h2>
        <h3 className="main__list-articleSpecie">
          Especie: {props.species === "Human" ? "Humana" : "Alien"}
        </h3>
      </article>
    </Link>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

CharacterCard.defaultProps = {
  name: "Personaje anónimo",
  species: "Especie desconocida",
  image:
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/19.jpeg",
};

export default CharacterCard;
