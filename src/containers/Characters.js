import "../App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Searchbar from "../components/Searchbar.js";
import Character from "../components/Character.js";
import Pagenum from "../components/Pagenum.js";

const Characters = ({ storeFavCharacters }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");

  let name = "";
  if (title) {
    name = `&title=${title}`;
  }

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
    <ReactLoading
      type="bubbles"
      color="#ed161f"
      height={600}
      width={160}
      className="loading"
    />
  ) : (
    <div>
      <Searchbar setTitle={setTitle} placeholder={placeholder} />
      <div className="characters">
        {data.results.map((character) => {
          return (
            <Character
              character={character}
              key={character._id}
              storeFavCharacters={storeFavCharacters}
            />
          );
        })}
      </div>
      <Pagenum data={data} setPage={setPage} page={page} />
    </div>
  );
};

export default Characters;
