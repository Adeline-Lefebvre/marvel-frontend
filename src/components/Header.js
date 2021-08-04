import "../App.scss";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/characters">
        <img src={logo} alt="" />
      </Link>
      <div className="menu">
        <Link to="/characters">PERSONNAGES</Link>
        <Link to="/comics">COMICS</Link>
        <Link to="/favorites">FAVORIS</Link>
      </div>
    </div>
  );
};

export default Header;

// en haut : le logo MARVEL et un menu (personnages, comics, favoris).
