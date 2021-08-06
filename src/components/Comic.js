import "../App.scss";

const Comic = ({ comic, favComics, setFavComics, setFavorites }) => {
  const url = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  return (
    <div className="favorite-parent">
      <i
        className="fas fa-heart"
        onClick={() => {
          const newTab = [...favComics];
          newTab.push(comic);
          setFavComics(newTab);
          setFavorites();
        }}
      ></i>
      <div className="comic">
        <div className="name">{comic.title}</div>
        <img src={url} alt="" />
        <div className="description">{comic.description}</div>
      </div>
    </div>
  );
};

export default Comic;
