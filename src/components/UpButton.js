import PropTypes from "prop-types";
import "../stylesheets/UpButton.scss";

const UpButton = (props) => {
  const handleBackClick = () => {
    props.handleBackClick();
  };
  return (
    <button onClick={handleBackClick} className="main__backUpwards">
      Inicio de la página
    </button>
  );
};

UpButton.propTypes = {
  handleBackClick: PropTypes.func,
};

export default UpButton;
