import "../App.scss";
import Cookies from "js-cookie";

const Comic = ({ comic, favComics, setFavComics }) => {
  const url = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  return (
    <div className="favorite-parent">
      <i
        className="fas fa-heart"
        onClick={() => {
          const newTab = [...favComics];
          newTab.push(comic);
          setFavComics(newTab);
          Cookies.set("favComics", favComics, {
            expires: 7,
            sameSite: "none",
            secure: true,
          });
        }}
      ></i>
      <div className="comic">
        <div className="name">{comic.title}</div>
        <img src={url} alt="" />
        <div className="description">{comic.description}</div>
      </div>
    </div>
  );
};

export default Comic;
