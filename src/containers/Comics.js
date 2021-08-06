import "../App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Comic from "../components/Comic.js";
import Searchbar from "../components/Searchbar.js";
import Pagenum from "../components/Pagenum.js";

const Comics = ({ favComics, setFavComics }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  let titleQuery = "";
  if (title) titleQuery = `&title=${title}`;

  const placeholder = "Rechercher un comic";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://adeline-marvel-backend.herokuapp.com/comics?skip=${
            (page - 1) * 100
          }${titleQuery}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, titleQuery]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Searchbar setTitle={setTitle} placeholder={placeholder} />
      <div className="comics">
        {data.results.map((comic) => {
          return (
            <Comic
              comic={comic}
              key={comic._id}
              favComics={favComics}
              setFavComics={setFavComics}
            />
          );
        })}
      </div>
      <Pagenum data={data} setPage={setPage} page={page} />
    </div>
  );
};

export default Comics;

// système permettant de mettre chaque fiche en favoris
// conserver ces favoris dans la mémoire locale du navigateur (Cookies ou Local Storage) de l’utilisateur.
