import "../App.scss";
import { useHistory } from "react-router-dom";

const Character = ({ character }) => {
  const history = useHistory();

  const url = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  return (
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
  );
};

export default Character;
