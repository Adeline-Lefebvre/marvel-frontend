import "./App.scss";
import "./reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Characters from "./containers/Characters.js";
import Character from "./containers/Character.js";
import Comics from "./containers/Comics.js";
import Favorites from "./containers/Favorites.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
