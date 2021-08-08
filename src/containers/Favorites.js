import "../App.scss";
import { useHistory } from "react-router-dom";

const Favorites = ({ favCharacters, favComics }) => {
  const history = useHistory();

  return (
    <div>
      <div className="title">Comics Favoris</div>
      <div className="comics">
        {favComics &&
          favComics.map((comic) => {
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
        {favCharacters &&
          favCharacters.map((character) => {
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
