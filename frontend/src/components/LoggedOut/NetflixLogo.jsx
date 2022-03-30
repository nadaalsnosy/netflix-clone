import logo from "../../images/Logonetflix.png";
import { Link } from "react-router-dom";

const NetflixLogo = () => {
  return (
    <div>
      <Link to={`/`}>
        <img src={logo} className="netflexImg" alt="netflix-logo" />
      </Link>
    </div>
  );
};

export default NetflixLogo;
