/* eslint-disable */

import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

import "./AddNewMovie.css";
import { useMovieRating } from "../../../core/contexts/MovieRatingContext";
import { useNavigate } from "react-router-dom";

const AddNewMovie = () => {
  const [movieFormDetails, setMovieFormDetails] = useState({
    id: uuid(),
    title: "",
    year: 1990,
    genre: "",
    rating: 1,
    director: "",
    writer: "",
    cast: "",
    summary: "",
    imageURL: "",
  });

  const { dispatch } = useMovieRating();
  const navigate = useNavigate();

  const productFormDetailsChangeHandler = (event) => {
    const { name, value } = event.target;
    setMovieFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const addNewMovieButtonHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_MOVIE", payload: movieFormDetails });
    setMovieFormDetails((prev) => ({
      ...prev,
      id: uuid(),
      title: "",
      year: 1990,
      genre: "",
      rating: 1,
      director: "",
      writer: "",
      cast: "",
      summary: "",
      imageURL: "",
    }));
    toast.success("Added new movie successfully!");
    navigate("/");
  };

  return (
    <div className="add-new-movie-section">
      <h2>Add New Movie</h2>

      <form className="add-new-movie-form" onSubmit={addNewMovieButtonHandler}>
        <label htmlFor="title-inpt">
          Title:
          <input
            name="title"
            value={movieFormDetails.title}
            type="text"
            id="title-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="year-inpt">
          Year:
          <input
            name="year"
            value={movieFormDetails.year}
            type="number"
            id="year-inpt"
            required
            onChange={productFormDetailsChangeHandler}
            min={1990}
            max={2023}
          />
        </label>

        <label htmlFor="genre-inpt">
          Genre:
          <input
            name="genre"
            value={movieFormDetails.genre}
            id="genre-inpt"
            type="text"
            required
            onChange={productFormDetailsChangeHandler}
            placeholder="Separate multiple genres by comma"
          />
        </label>

        <label htmlFor="rating-inpt">
          Rating:
          <input
            type="number"
            name="rating"
            value={movieFormDetails.rating}
            id="rating-inpt"
            required
            onChange={productFormDetailsChangeHandler}
            min={1}
            max={10}
          />
        </label>

        <label htmlFor="director-inpt">
          Director:
          <input
            type="text"
            name="director"
            value={movieFormDetails.director}
            id="director-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="writer-inpt">
          Writer:
          <input
            name="writer"
            value={movieFormDetails.writer}
            type="text"
            id="writer-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="cast-inpt">
          Cast:
          <input
            name="cast"
            value={movieFormDetails.cast}
            type="text"
            id="cast-inpt"
            required
            onChange={productFormDetailsChangeHandler}
            placeholder="Separate multiple cast by comma"
          />
        </label>

        <label htmlFor="sum-inpt">
          Summary:
          <input
            type="text"
            name="summary"
            value={movieFormDetails.summary}
            id="sum-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <label htmlFor="img-inpt">
          Image URL:
          <input
            type="text"
            name="imageURL"
            value={movieFormDetails.imageURL}
            id="img-inpt"
            required
            onChange={productFormDetailsChangeHandler}
          />
        </label>

        <button type="submit" className="add-movie-btn">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddNewMovie;
