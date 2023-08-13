/* eslint-disable */

import { useMovieRating } from "../../../core/contexts/MovieRatingContext";
import { insertNumberValuesInArray } from "../../../utils/helper-functions/HelperFunctions";
import MoviesListing from "../../shared/movies-listing-component/MoviesListing";
import "./Home.css";

const Home = () => {
  const { movies } = useMovieRating();

  const genres = movies
    .reduce(
      (acc, curr) => [
        ...acc,
        ...(typeof curr["genre"] === "string"
          ? curr["genre"].split(",").map((str) => str.trim())
          : curr["genre"]),
      ],
      ["All Genre"]
    )
    .reduce((acc, curr) => (!acc.includes(curr) ? [...acc, curr] : acc), []);

  const years = ["Release Year", ...insertNumberValuesInArray(1990, 2023)];

  const rating = ["Rating", ...insertNumberValuesInArray(1, 10)];

  return (
    <MoviesListing
      moviesList={movies}
      firstFilterList={genres}
      secondFilterList={years}
      thirdFilterList={rating}
    />
  );
};

export default Home;
