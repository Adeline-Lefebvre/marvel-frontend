import "../App.scss";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Favorites = ({ favCharacters, favComics }) => {
  const history = useHistory();
  const favComicsCookie = JSON.parse(Cookies.get("favComics"));
  const favCharactersCookie = JSON.parse(Cookies.get("favCharacters"));

  return (
    <div>
      <div className="title">Comics Favoris</div>
      <div className="comics">
        {favComicsCookie &&
          favComicsCookie.map((comic) => {
            return (
              <div className="comic" key={comic._id}>
                <div>{comic.title}</div>
                <img src={`${comic.thumbnail.path}.jpg`} alt="" />
                <div className="description">{comic.description}</div>
              </div>
            );
          })}
      </div>

      <div className="title">Personnages favoris</div>
      <div className="characters">
        {favCharactersCookie &&
          favCharactersCookie.map((character) => {
            return (
              <div
                className="character"
                key={character._id}
                onClick={() => {
                  history.push({
                    pathname: `/character/${character._id}`,
                    state: { character: character },
                  });
                }}
              >
                <div className="name">{character.name}</div>
                <img src={`${character.thumbnail.path}.jpg`} alt="" />
                <div className="description">{character.description}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favorites;
