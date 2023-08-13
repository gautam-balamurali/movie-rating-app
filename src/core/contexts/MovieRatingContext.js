import { createContext, useContext, useEffect, useReducer } from "react";

import { reducerFunction } from "../reducers/reducerFunction";
import { reducerInitialState } from "../reducers/reducerInitialState";
import { movies } from "../database/Movies";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/local-storage-functions/LocalStorageFunctions";

export const MovieRatingContext = createContext();

export const MovieRatingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, reducerInitialState);

  useEffect(() => {
    const storedMoviesData = getLocalStorage("movies");
    if (storedMoviesData?.length > 0) {
      dispatch({ type: "UPDATE_MOVIES_DATA", payload: storedMoviesData });
    } else dispatch({ type: "UPDATE_MOVIES_DATA", payload: movies });
  }, []);

  useEffect(() => {
    setLocalStorage("movies", state.movies);
  }, [state.movies]);

  const starButtonToggleHandler = (movieId) => {
    const updatedList = state.movies.map((movie) =>
      movie.id === movieId ? { ...movie, starred: !movie.starred } : movie
    );
    dispatch({ type: "UPDATE_MOVIES_DATA", payload: updatedList });
  };

  const watchlistButtonToggleHandler = (movieId) => {
    const updatedList = state.movies.map((movie) =>
      movie.id === movieId ? { ...movie, watchlist: !movie.watchlist } : movie
    );
    dispatch({ type: "UPDATE_MOVIES_DATA", payload: updatedList });
  };

  return (
    <MovieRatingContext.Provider
      value={{
        ...state,
        dispatch,
        starButtonToggleHandler,
        watchlistButtonToggleHandler,
      }}
    >
      {children}
    </MovieRatingContext.Provider>
  );
};

export const useMovieRating = () => useContext(MovieRatingContext);
