import "../App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Character from "../components/Character.js";
import Pagenum from "../components/Pagenum.js";

const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://adeline-marvel-backend.herokuapp.com/characters"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <div className="characters">
        {data.results.map((character) => {
          return <Character character={character} key={character._id} />;
        })}
      </div>
      <Pagenum data={data} />
    </div>
  );
};

export default Characters;

/* faire apparaître la liste des personnages MARVEL,
  par ordre alphabétique (100 par page), 
  sous forme de fiche (photo, nom, description). 
  En cliquant sur chaque fiche, il devra être possible d’accéder à une page regroupant les comics liés au personnage. */

// Vous intégrerez également un moteur de recherche, afin de rechercher par nom/titre.
// Vous prendrez également soin d’ajouter un système de pagination à chaque page.

// système permettant de mettre chaque fiche en favoris
// conserver ces favoris dans la mémoire locale du navigateur (Cookies ou Local Storage) de l’utilisateur.
