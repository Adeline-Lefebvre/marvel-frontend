import "../App.scss";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Comic = ({ comic, favComics, setFavComics }) => {
  const url = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  useEffect(() => {
    const setCookie = () => {
      if (favComics) {
        Cookies.set("favComics", JSON.stringify(favComics), {
          expires: 7,
          sameSite: "none",
          secure: true,
        });
      } else {
        Cookies.remove("favComics");
      }
    };
    setCookie();
  }, [favComics]);

  return (
    <div className="favorite-parent">
      <i
        className="fas fa-heart"
        onClick={() => {
          const newTab = [...favComics];
          newTab.push(comic);
          setFavComics(newTab);
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
