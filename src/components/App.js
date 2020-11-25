import "../stylesheets/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import getInfoFromApi from "../services/apiCharacters";
import logo from "../images/logo.png";
import loadingGif from "../images/loading2.gif";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getApiResults = () => {
    getInfoFromApi()
      .catch(() => setApiError(true))
      .then((data) => {
        if (data) {
          setCharacters(data.results);
        }
        setLoading(false);
      });
  };

  const handleInputChange = (inputValue) => {
    setSearchValue(inputValue);
  };

  const handleBackClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLoading(true);
    getApiResults();
  }, []);

  return (
    <>
      <header id="header" className="header">
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
            {loading ? (
              <img
                className="main__loading"
                src={loadingGif}
                title="Loading"
                alt="Loading"
              />
            ) : (
              ""
            )}
            {apiError ? (
              <p className="main__apiError">
                Lo sentimos, no se ha podido cargar la lista de personajes. Le
                rogamos lo intente de nuevo más tarde.
              </p>
            ) : (
              <CharacterList
                searchValue={searchValue}
                characters={characters}
              />
            )}
            <button onClick={handleBackClick} className="main__backUpwards">
              Inicio de la página
            </button>
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
