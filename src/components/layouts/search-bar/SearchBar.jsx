import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-section">
      <input
        className="search-bar"
        type="text"
        placeholder="Search movies by title, cast and director..."
      />
    </div>
  );
};

export default SearchBar;
