import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import "../stylesheets/CharacterList.scss";

const CharacterList = (props) => {
  const charactersToRender = props.characters
    .filter((character) =>
      character.name.toUpperCase().includes(props.searchValue.toUpperCase())
    )
    .map((character) => {
      return (
        <li className="main__list-item" key={character.id}>
          <CharacterCard
            name={character.name}
            image={character.image}
            species={character.species}
            id={character.id}
          />
        </li>
      );
    });
  if (charactersToRender.length !== 0) {
    return <ul className="main__list">{charactersToRender}</ul>;
  } else {
    return (
      <p className="main__errorMessage">
        No hay ningún personaje que coincida con la palabra "{props.searchValue}
        "
      </p>
    );
  }
};

CharacterList.propTypes = {
  characters: PropTypes.array,
  searchValue: PropTypes.string,
};

export default CharacterList;
