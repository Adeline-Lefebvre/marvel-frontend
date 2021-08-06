import "./App.scss";
import "./reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Characters from "./containers/Characters.js";
import Character from "./containers/Character.js";
import Comics from "./containers/Comics.js";
import Favorites from "./containers/Favorites.js";
import Footer from "./components/Footer.js";
import Cookies from "js-cookie";

function App() {
  const [favCharacters, setFavCharacters] = useState([]);
  const [favComics, setFavComics] = useState([]);

  const setFavorites = () => {
    if (favCharacters) {
      Cookies.set("favCharacters", JSON.stringify(favCharacters), {
        expires: 7,
        sameSite: "none",
        secure: true,
      });
    } else {
      Cookies.remove("favCharacters");
    }

    if (favComics) {
      Cookies.set("favComics", JSON.stringify(favComics), {
        expires: 7,
        sameSite: "none",
        secure: true,
      });
    } else {
      Cookies.remove("favComics");
    }
  };

  useEffect(() => {
    setFavCharacters(JSON.parse(Cookies.get("favCharacters")));
    setFavComics(JSON.parse(Cookies.get("favComics")));
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters">
          <Characters
            favCharacters={favCharacters}
            setFavCharacters={setFavCharacters}
            setFavorites={setFavorites}
          />
        </Route>
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/comics">
          <Comics
            favComics={favComics}
            setFavComics={setFavComics}
            setFavorites={setFavorites}
          />
        </Route>
        <Route path="/favorites">
          <Favorites favCharacters={favCharacters} favComics={favComics} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
