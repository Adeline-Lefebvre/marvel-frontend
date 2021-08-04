import "../App.scss";
import logo from "../logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="menu">
        <div>Personnages</div>
        <div>Comics</div>
        <div>Favoris</div>
      </div>
    </div>
  );
};

export default Header;

// en haut : le logo MARVEL et un menu (personnages, comics, favoris).
