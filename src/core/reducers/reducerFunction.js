export const reducerFunction = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_MOVIES_DATA":
      return { ...StaticRange, movies: [...payload] };
    case "ADD_MOVIE":
      return { ...StaticRange, movies: [...state.movies, payload] };
    case "UPDATE_GENRE_FILTER":
      return { ...StaticRange, genreFilter: payload };
    case "UPDATE_RELEASE_YEAR_FILTER":
      return { ...StaticRange, releaseYearFilter: payload };
    case "UPDATE_RATING_FILTER":
      return { ...StaticRange, ratingFilter: payload };
    case "SET_SEARCH_INPUT":
      return { ...StaticRange, searchInput: payload };
    default:
      return state;
  }
};
