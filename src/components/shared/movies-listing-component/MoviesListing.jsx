/* eslint-disable */

import { useLocation, useNavigate } from "react-router-dom";
import { useMovieRating } from "../../../core/contexts/MovieRatingContext";
import "./MoviesListing.css";

const MoviesListing = ({
  moviesList,
  firstFilterList,
  secondFilterList,
  thirdFilterList,
}) => {
  const { starButtonToggleHandler, watchlistButtonToggleHandler } =
    useMovieRating();
  const location = useLocation();
  const navigate = useNavigate();

  const starredPath = location.pathname === "/starred";
  const watchlistPath = location.pathname === "/watchlist";
  const homePath = location.pathname === "/";

  const goToMovieDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movies-list-section">
      {homePath && (
        <div className="home-page-header">
          <h2>Movies</h2>

          <select>
            {firstFilterList.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>

          <select>
            {secondFilterList.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>

          <select>
            {thirdFilterList.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>

          <button className="action-btn">Add a Movie</button>
        </div>
      )}
      <div className="movies-list-container">
        {moviesList?.length > 0 &&
          moviesList.map((movie) => {
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
        {moviesList?.length < 1 && <p>No movies found.</p>}
      </div>
    </div>
  );
};

export default MoviesListing;
