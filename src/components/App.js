import "../stylesheets/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import getInfoFromApi from "../services/apiCharacters";
import logo from "../images/logo.png";
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
      <header className="header">
        <img
          className="header__logo"
          title="Logo Rick y Morty"
          alt="Logo Rick y Morty"
          src={logo}
        />
      </header>
      <main className="main">
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
