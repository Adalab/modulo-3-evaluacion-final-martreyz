import loadingGif from "../images/loading2.gif";
import "../stylesheets/Loader.scss";

const Loader = () => {
  return (
    <img
      className="main__loading"
      src={loadingGif}
      title="Loading"
      alt="Loading"
    />
  );
};

export default Loader;
