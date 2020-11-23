import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <li key={props.id}>
      <article>
        <img src={props.image} alt={"Fotografía de " + props.name} />
        <h2>{props.name}</h2>
        <h3>{props.species}</h3>
      </article>
    </li>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

CharacterCard.defaultProps = {
  name: "Personaje anónimo",
};

export default CharacterCard;
