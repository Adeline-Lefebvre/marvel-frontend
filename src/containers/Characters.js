import "../App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar.js";
import Character from "../components/Character.js";
import Pagenum from "../components/Pagenum.js";

const Characters = ({ favCharacters, setFavCharacters }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");

  let name = "";
  if (title) name = `&title=${title}`;

  const placeholder = "Rechercher un personnage";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://adeline-marvel-backend.herokuapp.com/characters?skip=${
            (page - 1) * 100
          }${name}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, name]);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Searchbar setTitle={setTitle} placeholder={placeholder} />
      <div className="characters">
        {data.results.map((character) => {
          return (
            <Character
              character={character}
              key={character._id}
              favCharacters={favCharacters}
              setFavCharacters={setFavCharacters}
            />
          );
        })}
      </div>
      <Pagenum data={data} setPage={setPage} page={page} />
    </div>
  );
};

export default Characters;

// conserver ces favoris dans la mémoire locale du navigateur (Cookies ou Local Storage) de l’utilisateur.
