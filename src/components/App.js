import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import getInfoFromApi from "../services/apiCharacters";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getApiResults = () => {
    getInfoFromApi().then((data) => {
      setCharacters(data.results);
    });
  };

  const handleInputChange = (inputValue) => {
    setSearchValue(inputValue);
  };

  useEffect(() => {
    getApiResults();
  }, []);

  return (
    <>
      <header>
        <h1>Rick y Morty</h1>
      </header>
      <main>
        <Filters
          searchValue={searchValue}
          handleInputChange={handleInputChange}
        />
        <CharacterList searchValue={searchValue} characters={characters} />
      </main>
    </>
  );
}

export default App;
