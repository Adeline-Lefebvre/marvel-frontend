import "../App.scss";
import { Link } from "react-router-dom";

const Character = ({ character }) => {
  const url = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  return (
    <Link
      to={`/character/${character._id}`}
      state={{ character: character, url: url }}
      className="character"
    >
      <div className="name">{character.name}</div>
      <img src={url} alt="" />
      <div className="description">{character.description}</div>
    </Link>
  );
};

export default Character;
