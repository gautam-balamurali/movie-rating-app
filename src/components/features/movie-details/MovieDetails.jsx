import { useMovieRating } from "../../../core/contexts/MovieRatingContext";
import "./MovieDetails.css";

const MovieDetails = ({ movie }) => {
  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
    starred,
    watchlist,
  } = movie;

  const { starButtonToggleHandler, watchlistButtonToggleHandler } =
    useMovieRating();

  return (
    <div className="movie-details-section">
      <div className="movie-details-card">
        <div className="first-grid">
          <img src={imageURL} alt={title} />
        </div>

        <div className="second-grid">
          <h2>{title}</h2>
          <p>{summary}</p>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
          <p>Rating: {rating}</p>
          <p>Director: {director}</p>
          <p>Writer: {writer}</p>
          <p>Cast: {cast.join(", ")}</p>

          <div className="action-btns">
            <button
              onClick={() => starButtonToggleHandler(id)}
              className="action-btn"
            >
              {starred ? "Unstar" : "Star"}
            </button>

            <button
              onClick={() => watchlistButtonToggleHandler(id)}
              className="action-btn"
            >
              {watchlist ? "Remove from Watchlist" : "Add to Watchlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
