export const reducerFunction = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_MOVIES_DATA":
      return { ...state, movies: [...payload] };
    case "ADD_MOVIE":
      return { ...state, movies: [...state.movies, payload] };
    case "UPDATE_GENRE_FILTER":
      return { ...state, genreFilter: payload };
    case "UPDATE_RELEASE_YEAR_FILTER":
      return { ...state, releaseYearFilter: payload };
    case "UPDATE_RATING_FILTER":
      return { ...state, ratingFilter: payload };
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: payload };
    default:
      return state;
  }
};
