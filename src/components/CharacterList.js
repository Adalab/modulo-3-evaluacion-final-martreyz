import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  console.log(props.searchValue);
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
  return <ul>{charactersToRender}</ul>;
};
CharacterList.propTypes = {};
export default CharacterList;
