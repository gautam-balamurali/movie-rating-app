/* eslint-disable */

import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import PageNotFound from "../../pages/PageNotFound";
import WatchlistPage from "../../pages/WatchlistPage";
import StarredPage from "../../pages/StarredPage";
import AddNewMoviePage from "../../pages/AddNewMoviePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/watchlist" element={<WatchlistPage />} />
      <Route path="/starred" element={<StarredPage />} />
      <Route path="/add-movie" element={<AddNewMoviePage />} />
      <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
