import "../App.scss";
import { useLocation } from "react-router-dom";

const Character = () => {
  const location = useLocation();
  const { comics, name, description } = location.state.character;
  const { url } = location.state.url;

  return (
    <div className="character-page">
      <div className="name">{name}</div>
      <img src={url} alt="" />
      <div className="description">{description}</div>
      <div>
        {comics.map((comics, index) => {
          return <div key={index}>{comics}</div>;
        })}
      </div>
    </div>
  );
};

export default Character;

// page regroupant les comics liés au personnage.
