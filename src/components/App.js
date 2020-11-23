import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import getInfoFromApi from "../services/apiCharacters";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const getApiResults = () => {
    getInfoFromApi().then((data) => {
      setCharacters(data.results);
    });
  };

  useEffect(() => {
    getApiResults();
  }, []);

  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
