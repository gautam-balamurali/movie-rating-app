/* eslint-disable */

import Navbar from "../navbar/Navbar";
import SearchBar from "../search-bar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>IMDB</h1>
      <SearchBar />
      <Navbar />
    </header>
  );
};

export default Header;
