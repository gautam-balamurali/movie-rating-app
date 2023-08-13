import { useMovieRating } from "../../../core/contexts/MovieRatingContext";
import MoviesListing from "../../shared/movies-listing-component/MoviesListing";

import "./Watchlist.css";

const Watchlist = () => {
  const { movies } = useMovieRating();
  const watchlistMovies = movies.filter((movie) => movie.watchlist);

  return <MoviesListing moviesList={watchlistMovies} />;
};

export default Watchlist;
