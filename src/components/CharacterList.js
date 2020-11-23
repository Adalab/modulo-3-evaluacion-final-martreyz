import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charactersToRender = props.characters
    .filter((character) =>
      character.name.toUpperCase().includes(props.searchValue.toUpperCase())
    )
    .map((character) => {
      return (
        <li key={character.id}>
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
    return <ul>{charactersToRender}</ul>;
  } else {
    return (
      <p>
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
