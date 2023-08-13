import { getLocalStorage } from "../../utils/local-storage-functions/LocalStorageFunctions";

export const reducerInitialState = {
  movies: getLocalStorage("movies") ?? [],
  genreFilter: getLocalStorage("genre") ?? "all",
  releaseYearFilter: getLocalStorage("release-year") ?? "all",
  ratingFilter: getLocalStorage("rating") ?? "all",
  searchInput: "",
};
