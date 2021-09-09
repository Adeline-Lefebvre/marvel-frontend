import "../App.scss";
import { useHistory } from "react-router-dom";

const Favorites = ({
  favCharacters,
  favComics,
  deleteFavCharacter,
  deleteFavComic,
}) => {
  const history = useHistory();

  return (
    <div>
      <div className="title">Comics Favoris</div>
      <div className="comics" style={{ justifyContent: "center" }}>
        {favComics.length > 0 ? (
          favComics.map((comic) => {
            return (
              <div
                className="comic"
                key={comic._id}
                style={{ position: "relative", marginRight: "20px" }}
              >
                <i
                  className="fas fa-trash fav-icon"
                  onClick={() => deleteFavComic(comic)}
                ></i>
                <div className="name">{comic.title}</div>
                <img src={`${comic.thumbnail.path}.jpg`} alt="" />
                <div className="description">{comic.description}</div>
              </div>
            );
          })
        ) : (
          <div style={{ margin: "0 auto" }}>
            Il n'y a pas encore de comics favoris.
          </div>
        )}
      </div>

      <div className="title">Personnages favoris</div>
      <div className="characters" style={{ justifyContent: "center" }}>
        {favCharacters.length > 0 ? (
          favCharacters.map((character) => {
            return (
              <div
                className="character"
                key={character._id}
                style={{ position: "relative", marginRight: "20px" }}
              >
                <div
                  className="fav-icon"
                  onClick={() => deleteFavCharacter(character)}
                >
                  <i className="fas fa-trash" />
                </div>
                <div
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
              </div>
            );
          })
        ) : (
          <div style={{ margin: "0 auto" }}>
            Il n'y a pas encore de personnages favoris.
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
