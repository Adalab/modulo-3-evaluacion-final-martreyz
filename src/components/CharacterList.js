import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  console.log(props.characters);
  const charactersToRender = props.characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        image={character.image}
        species={character.species}
        id={character.id}
      />
    );
  });
  return <ul>{charactersToRender}</ul>;
};
CharacterList.propTypes = {};
export default CharacterList;
