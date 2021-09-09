import "./App.scss";
import "./reset.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Cookies from "js-cookie";
import Header from "./components/Header.js";
import Characters from "./containers/Characters.js";
import Character from "./containers/Character.js";
import Comics from "./containers/Comics.js";
import Favorites from "./containers/Favorites.js";
import Footer from "./components/Footer.js";

function App() {
  const [favCharacters, setFavCharacters] = useState([]);
  const [favComics, setFavComics] = useState([]);

  const alert = useAlert();

  const storeFavCharacters = async (newFav) => {
    if (favCharacters.find((elem) => elem._id === newFav._id)) {
      alert.show(`${newFav.name} existe déjà dans la liste de favoris`, {
        timeout: 4000,
        type: "error",
      });
    } else {
      let newFavs = favCharacters.slice();
      newFavs.push(newFav);

      Cookies.set("favCharacters", JSON.stringify(newFavs), {
        expires: 7,
        sameSite: "none",
        secure: true,
      });

      alert.show(`${newFav.name} a bien été ajouté.e à la liste de favoris`, {
        timeout: 4000,
        type: "success",
      });

      setFavCharacters(newFavs);
    }
  };

  const deleteFavCharacter = async (favToDelete) => {
    if (favCharacters.length > 1) {
      let newFavs = favCharacters.slice();
      newFavs.splice(newFavs.indexOf(favToDelete), 1);

      Cookies.set("favCharacters", JSON.stringify(newFavs), {
        expires: 7,
        sameSite: "none",
        secure: true,
      });

      alert.show(
        `${favToDelete.name} a bien été supprimé.e de la liste de favoris`,
        {
          timeout: 4000,
          type: "success",
        }
      );

      setFavCharacters(newFavs);
    } else {
      setFavCharacters([]);
      Cookies.remove("favCharacters");
    }
  };

  const storeFavComics = async (newFav) => {
    if (favComics.find((elem) => elem._id === newFav._id)) {
      alert.show(`${newFav.title} existe déjà dans la liste de favoris`, {
        timeout: 4000,
        type: "error",
      });
    } else {
      let newFavs = favComics.slice();
      newFavs.push(newFav);

      Cookies.set("favComics", JSON.stringify(newFavs), {
        expires: 7,
        sameSite: "none",
        secure: true,
      });

      alert.show(`${newFav.title} a bien été ajouté à la liste de favoris`, {
        timeout: 4000,
        type: "success",
      });

      setFavComics(newFavs);
    }
  };

  const deleteFavComic = async (favToDelete) => {
    if (favComics.length > 1) {
      let newFavs = favComics.slice();
      newFavs.splice(newFavs.indexOf(favToDelete), 1);

      Cookies.set("favComics", JSON.stringify(newFavs), {
        expires: 7,
        sameSite: "none",
        secure: true,
      });

      alert.show(
        `${favToDelete.title} a bien été supprimé de la liste de favoris`,
        {
          timeout: 4000,
          type: "success",
        }
      );

      setFavComics(newFavs);
    } else {
      setFavComics([]);
      Cookies.remove("favComics");
    }
  };

  useEffect(() => {
    const getFavorites = () => {
      if (Cookies.get("favCharacters")) {
        setFavCharacters(JSON.parse(Cookies.get("favCharacters")));
      }
      if (Cookies.get("favComics")) {
        setFavComics(JSON.parse(Cookies.get("favComics")));
      }
    };

    getFavorites();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/characters" />
        </Route>
        <Route path="/characters">
          <Characters storeFavCharacters={storeFavCharacters} />
        </Route>
        <Route path="/character/:id">
          <Character storeFavComics={storeFavComics} />
        </Route>
        <Route path="/comics">
          <Comics storeFavComics={storeFavComics} />
        </Route>
        <Route path="/favorites">
          <Favorites
            favCharacters={favCharacters}
            favComics={favComics}
            deleteFavCharacter={deleteFavCharacter}
            deleteFavComic={deleteFavComic}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
