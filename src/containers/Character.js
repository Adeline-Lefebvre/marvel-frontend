import "../App.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Comic from "../components/Comic.js";

const Character = ({ storeFavComics }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const { name, description, thumbnail, _id } = location.state.character;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://adeline-marvel-backend.herokuapp.com/comics/${_id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [_id]);

  return isLoading ? (
    <ReactLoading
      type="bubbles"
      color="#ed161f"
      height={600}
      width={160}
      className="loading"
    />
  ) : (
    <div className="character-page">
      <div className="character-infos">
        <img src={`${thumbnail.path}.jpg`} alt="" />
        <div>
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </div>
      </div>
      <div className="comics">
        {data.comics &&
          data.comics.map((comic) => {
            return (
              <Comic
                key={comic._id}
                comic={comic}
                storeFavComics={storeFavComics}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Character;
