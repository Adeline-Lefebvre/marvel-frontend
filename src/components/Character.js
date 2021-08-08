import "../App.scss";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Character = ({ character, favCharacters, setFavCharacters }) => {
  const history = useHistory();
  const url = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  useEffect(() => {
    const setCookie = () => {
      if (favCharacters) {
        Cookies.set("favCharacters", JSON.stringify(favCharacters), {
          expires: 7,
          sameSite: "none",
          secure: true,
        });
      } else {
        Cookies.remove("favCharacters");
      }
    };
    setCookie();
  }, [favCharacters]);

  return (
    <div className="favorite-parent">
      <i
        className="fas fa-heart"
        onClick={() => {
          const newTab = [...favCharacters];
          newTab.push(character);
          setFavCharacters(newTab);
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
