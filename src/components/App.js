import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import getInfoFromApi from "../services/apiCharacters";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

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
        <Switch>
          <Route exact path="/">
            <Filters
              searchValue={searchValue}
              handleInputChange={handleInputChange}
            />
            <CharacterList searchValue={searchValue} characters={characters} />
          </Route>
          <Route
            path="/character/:id"
            render={(routerProps) => (
              <CharacterDetail
                match={routerProps.match}
                characters={characters}
              />
            )}
          ></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
