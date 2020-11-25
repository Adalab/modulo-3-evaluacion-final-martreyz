import logo from "../images/logo.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header id="header" className="header">
      <img
        className="header__logo"
        title="Logo Rick y Morty"
        alt="Logo Rick y Morty"
        src={logo}
      />
    </header>
  );
};

export default Header;
