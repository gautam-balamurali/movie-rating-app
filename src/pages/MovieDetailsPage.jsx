import { useParams } from "react-router-dom";
import MovieDetails from "../components/features/movie-details/MovieDetails";
import { useMovieRating } from "../core/contexts/MovieRatingContext";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movies } = useMovieRating();

  const movie = movies.find((movie) => movie.id === movieId);

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsPage;
