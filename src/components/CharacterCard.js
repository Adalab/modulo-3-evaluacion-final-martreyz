import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={"/character/" + props.id}>
      <article>
        <img
          src={props.image}
          alt={"Fotografía de " + props.name}
          title={"Fotografía de " + props.name}
        />
        <h2>{props.name}</h2>
        <h3>Especie: {props.species === "Human" ? "Humana" : "Alien"}</h3>
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
