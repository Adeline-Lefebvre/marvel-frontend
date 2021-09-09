import "../App.scss";

const Comic = ({ comic, storeFavComics }) => {
  const url = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  return (
    <div className="comic" style={{ position: "relative" }}>
      <i
        className="fas fa-heart fav-icon"
        onClick={() => storeFavComics(comic)}
      ></i>
      <div className="name">{comic.title}</div>
      <img src={url} alt="" />
      <div className="description">{comic.description}</div>
    </div>
  );
};

export default Comic;
