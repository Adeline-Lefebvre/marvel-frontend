import "../App.scss";
import { useHistory } from "react-router-dom";

const Character = ({ character, storeFavCharacters }) => {
  const history = useHistory();
  const url = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  return (
    <div className="character" style={{ position: "relative" }}>
      <div className="fav-icon" onClick={() => storeFavCharacters(character)}>
        <i className="fas fa-heart" />
      </div>
      <div
        onClick={() => {
          history.push({
            pathname: `/character/${character._id}`,
            state: { character: character },
          });
        }}
      >
        <div className="name">{character.name}</div>

        <img src={url} alt="" />
        <div className="description">{character.description}</div>
      </div>
    </div>
  );
};

export default Character;
