import { useMovieRating } from "../../../core/contexts/MovieRatingContext";
import MoviesListing from "../../shared/movies-listing-component/MoviesListing";

import "./Starred.css";

const Starred = () => {
  const { movies } = useMovieRating();
  const starredMovies = movies.filter((movie) => movie.starred);

  return <MoviesListing moviesList={starredMovies} />;
};

export default Starred;
