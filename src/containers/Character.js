import "../App.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Comic from "../components/Comic.js";

const Character = () => {
  const [data, setData] = useState([]);

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
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [_id]);

  return (
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
            return <Comic key={comic._id} comic={comic}></Comic>;
          })}
      </div>
    </div>
  );
};

export default Character;
