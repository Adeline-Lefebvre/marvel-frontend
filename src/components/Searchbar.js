import "../App.scss";

const Searchbar = ({ setTitle, placeholder }) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => setTitle(event.target.value)}
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default Searchbar;
