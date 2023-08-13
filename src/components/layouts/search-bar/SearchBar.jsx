/* eslint-disable */

import { useMovieRating } from "../../../core/contexts/MovieRatingContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { dispatch, searchInput } = useMovieRating();

  const handleSearchInput = (event) => {
    const { value } = event.target;
    dispatch({ type: "SET_SEARCH_INPUT", payload: value });
  };

  return (
    <div className="search-bar-section">
      <input
        className="search-bar"
        type="text"
        placeholder="Search movies by title, cast and director..."
        onChange={handleSearchInput}
        value={searchInput}
      />
    </div>
  );
};

export default SearchBar;
