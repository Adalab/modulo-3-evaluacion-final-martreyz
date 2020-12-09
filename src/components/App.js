import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Loader from "./Loader";
import ApiError from "./ApiError";
import UpButton from "./UpButton";
import Footer from "./Footer";
import getInfoFromApi from "../services/apiCharacters";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [checked, setChecked] = useState(false);
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

  const handleCheckboxClick = () => {
    setChecked(!checked);
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
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filters
              searchValue={searchValue}
              handleInputChange={handleInputChange}
              handleCheckboxClick={handleCheckboxClick}
            />
            {loading ? <Loader /> : null}
            {apiError ? (
              <ApiError />
            ) : (
              <>
                <CharacterList
                  searchValue={searchValue}
                  checked={checked}
                  characters={characters}
                />
                <UpButton handleBackClick={handleBackClick} />
              </>
            )}
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
      <Footer />
    </>
  );
}

export default App;
