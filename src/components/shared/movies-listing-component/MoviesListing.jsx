/* eslint-disable */

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useMovieRating } from "../../../core/contexts/MovieRatingContext";
import "./MoviesListing.css";
import { setLocalStorage } from "../../../utils/local-storage-functions/LocalStorageFunctions";

const MoviesListing = ({
  moviesList,
  firstFilterList,
  secondFilterList,
  thirdFilterList,
}) => {
  const {
    starButtonToggleHandler,
    watchlistButtonToggleHandler,
    genreFilter,
    releaseYearFilter,
    ratingFilter,
    searchInput,
    dispatch,
  } = useMovieRating();
  const location = useLocation();
  const navigate = useNavigate();
  const [moviesToDisplay, setMoviesToDisplay] = useState([...moviesList]);

  const starredPath = location.pathname === "/starred";
  const watchlistPath = location.pathname === "/watchlist";
  const homePath = location.pathname === "/";

  const goToMovieDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "genreFilter":
        dispatch({ type: "UPDATE_GENRE_FILTER", payload: value });
        break;
      case "releaseYearFilter":
        dispatch({ type: "UPDATE_RELEASE_YEAR_FILTER", payload: value });
        break;
      case "ratingFilter":
        dispatch({ type: "UPDATE_RATING_FILTER", payload: value });
        break;
    }
  };

  useEffect(() => {
    let filteredList =
      searchInput.length < 1
        ? [...moviesList]
        : moviesList.filter(
            (movie) =>
              movie?.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
              movie?.director
                ?.toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              movie?.cast
                ?.map((actor) => actor.toLowerCase())
                .join()
                .includes(searchInput.toLowerCase())
          );

    if (homePath) {
      filteredList =
        genreFilter === "all"
          ? [...filteredList]
          : filteredList.filter((movie) => movie.genre.includes(genreFilter));

      filteredList =
        releaseYearFilter === "all"
          ? [...filteredList]
          : filteredList.filter((movie) => movie.year == releaseYearFilter);

      filteredList =
        ratingFilter === "all"
          ? [...filteredList]
          : filteredList.filter((movie) => movie.rating == ratingFilter);
    }

    setMoviesToDisplay([...filteredList]);
    setLocalStorage("genre", genreFilter);
    setLocalStorage("release-year", releaseYearFilter);
    setLocalStorage("rating", ratingFilter);
  }, [genreFilter, releaseYearFilter, ratingFilter, searchInput, moviesList]);

  return (
    <div className="movies-list-section">
      {homePath && (
        <div className="home-page-header">
          <h2>Movies</h2>

          <select
            name="genreFilter"
            onChange={handleFilterChange}
            defaultValue={genreFilter}
          >
            {firstFilterList.map((filter) => (
              <option
                key={filter}
                value={filter === "All Genre" ? "all" : filter}
              >
                {filter}
              </option>
            ))}
          </select>

          <select
            name="releaseYearFilter"
            onChange={handleFilterChange}
            defaultValue={releaseYearFilter}
          >
            {secondFilterList.map((filter) => (
              <option
                key={filter}
                value={filter === "Release Year" ? "all" : filter}
              >
                {filter}
              </option>
            ))}
          </select>

          <select
            name="ratingFilter"
            onChange={handleFilterChange}
            defaultValue={ratingFilter}
          >
            {thirdFilterList.map((filter) => (
              <option key={filter} value={filter === "Rating" ? "all" : filter}>
                {filter}
              </option>
            ))}
          </select>

          <button className="action-btn">Add a Movie</button>
        </div>
      )}
      <div className="movies-list-container">
        {moviesToDisplay?.length > 0 &&
          moviesToDisplay.map((movie) => {
            const { id, title, summary, imageURL, starred, watchlist } = movie;
            return (
              <div key={id} className="movie-card">
                <img
                  onClick={() => goToMovieDetails(id)}
                  src={imageURL}
                  alt={title}
                />

                <h3 onClick={() => goToMovieDetails(id)}>{title}</h3>

                <p onClick={() => goToMovieDetails(id)}>{summary}</p>

                <div className="action-btns">
                  <button
                    onClick={() =>
                      ((!starred && (homePath || watchlistPath)) ||
                        ((starred || !starred) && starredPath)) &&
                      starButtonToggleHandler(id)
                    }
                    className="action-btn"
                    disabled={
                      !(
                        (!starred && (homePath || watchlistPath)) ||
                        ((starred || !starred) && starredPath)
                      )
                    }
                  >
                    {starred ? (starredPath ? "Unstar" : "Starred") : "Star"}
                  </button>

                  <button
                    onClick={() =>
                      ((!watchlist && (homePath || starredPath)) ||
                        ((watchlist || !watchlist) && watchlistPath)) &&
                      watchlistButtonToggleHandler(id)
                    }
                    className="action-btn"
                    disabled={
                      !(
                        (!watchlist && (homePath || starredPath)) ||
                        ((watchlist || !watchlist) && watchlistPath)
                      )
                    }
                  >
                    {watchlist
                      ? watchlistPath
                        ? "Remove from Watchlist"
                        : "Added to Watchlist"
                      : "Add to Watchlist"}
                  </button>
                </div>
              </div>
            );
          })}
        {moviesToDisplay?.length < 1 && <p>No movies found.</p>}
      </div>
    </div>
  );
};

export default MoviesListing;
