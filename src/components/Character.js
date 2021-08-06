import "../App.scss";
import { useHistory } from "react-router-dom";

const Character = ({
  character,
  favCharacters,
  setFavCharacters,
  setFavCharactersCookie,
}) => {
  const history = useHistory();

  const url = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  return (
    <div className="favorite-parent">
      <i
        className="fas fa-heart"
        onClick={() => {
          const newTab = [...favCharacters];
          newTab.push(character);
          setFavCharacters(newTab);
          setFavCharactersCookie();
        }}
      ></i>
      <div
        className="character"
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
