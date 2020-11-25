import PropTypes from "prop-types";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handleInputChange = (ev) => {
    const inputValue = ev.currentTarget.value;
    props.handleInputChange(inputValue);
  };

  const handleInputEnter = (ev) => {
    if (ev.keyCode === "13") {
      ev.preventDefault();
    }
  };

  const handleCleanClick = () => {
    const inputValue = "";
    props.handleInputChange(inputValue);
  };

  const handleCheckboxClick = () => {
    props.handleCheckboxClick();
  };

  return (
    <form className="main__form">
      <label className="main__form-label" htmlFor="userSearch">
        Introduce el nombre del personaje a buscar:
      </label>
      <input
        className="main__form-input"
        placeholder="Ej. Rick Sanchez"
        onChange={handleInputChange}
        onKeyPress={handleInputEnter}
        id="userSearch"
        name="userSearch"
        type="text"
        value={props.searchValue}
      />
      <input
        className="main__form-clean"
        type="button"
        name="cleanSearch"
        value="X"
        title="Borrar búsqueda"
        onClick={handleCleanClick}
      />
      <label>
        <input
          className="main__form-cbox"
          type="checkbox"
          name="Order Selection"
          title="Order Selection"
          onClick={handleCheckboxClick}
        />
        Ordenar alfabéticamente
      </label>
    </form>
  );
};

Filters.propTypes = {
  searchValue: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default Filters;
