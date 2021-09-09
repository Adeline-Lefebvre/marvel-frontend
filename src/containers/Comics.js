import "../App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Comic from "../components/Comic.js";
import Searchbar from "../components/Searchbar.js";
import Pagenum from "../components/Pagenum.js";

const Comics = ({ storeFavComics }) => {
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
      <div className="comics">
        {data.results.map((comic) => {
          return (
            <Comic
              comic={comic}
              key={comic._id}
              storeFavComics={storeFavComics}
            />
          );
        })}
      </div>
      <Pagenum data={data} setPage={setPage} page={page} />
    </div>
  );
};

export default Comics;
