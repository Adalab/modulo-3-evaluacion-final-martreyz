import React, { useState } from "react";
import PropTypes from "prop-types";

const Filters = (props) => {
  const handleInputChange = (ev) => {
    const inputValue = ev.currentTarget.value;
    props.handleInputChange(inputValue);
  };

  return (
    <form>
      <label htmlFor="userSearch">
        Introduce el nombre del personaje a buscar:
      </label>
      <input
        placeholder="Ej. Rick Sanchez"
        onChange={handleInputChange}
        id="userSearch"
        name="userSearch"
        type="text"
        value={props.searchValue}
      />
    </form>
  );
};
Filters.propTypes = {};
export default Filters;
