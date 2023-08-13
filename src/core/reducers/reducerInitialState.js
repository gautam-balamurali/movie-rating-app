import { getLocalStorage } from "../../utils/local-storage-functions/LocalStorageFunctions";

export const reducerInitialState = {
  movies: getLocalStorage("movies") ?? [],
  genreFilter: getLocalStorage("genre") ?? "all",
  releaseYearFilter: Number(getLocalStorage("release-year")) ?? "all",
  ratingFilter: Number(getLocalStorage("rating")) ?? "all",
  searchInput: "",
};
