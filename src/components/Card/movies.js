/* eslint-disable jsx-a11y/control-has-associated-label */
import "./styles.scss";
import { useState } from "react";
import { BiLike, BiDislike, BiXCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { filter, includes } from "lodash";
import { changeCategory, deleteMovies, newMoviesAction } from "../../action/movies";
import CheckboxSelect from "./selected";

function Movies({
  title, category, likes, dislikes, id,
}) {
  const dispatch = useDispatch();
  const [toogleLikes, setNewLikes] = useState(true);

  const moviesState = useSelector((state) => state.movies.movies);
  const handleClickLike = (likesEvent, idEvent) => {
    setNewLikes(!toogleLikes);
    const newMovies = moviesState.map((movie) => {
      if (movie.id === idEvent) {
        return {
          ...movie,
          likes: toogleLikes ? likesEvent + 1 : likesEvent - 1,
        };
      }
      return movie;
    });
    dispatch(newMoviesAction(newMovies));
  };

  const handleClickDislike = (dislikesEvent, idEvent) => {
    setNewLikes(!toogleLikes);
    const newMovies = moviesState.map((movie) => {
      if (movie.id === idEvent) {
        return {
          ...movie,
          dislikes: toogleLikes ? dislikesEvent + 1 : dislikesEvent - 1,
        };
      }
      return movie;
    });
    dispatch(newMoviesAction(newMovies));
  };

  const handleChangeSelect = (event, idCategory) => {
    console.log(event.target.selectedOptions);
    const eventCategory = event.target.value;
    dispatch(changeCategory(eventCategory, idCategory));
  };

  return (
    <div className="cards__movies">
      <h2>{title}</h2>
      <h3>{category}</h3>
      <div className="cards__movies__likes">
        <button
          className="cards__movies__likes__item"
          type="button"
          onClick={() => handleClickLike(likes, id)}
        >
          <BiLike />
          <span>{likes}</span>
        </button>
        <button
          className="cards__movies__likes__item"
          type="button"
          onClick={() => handleClickDislike(dislikes, id)}
        >
          <BiDislike />
          <span>{dislikes}</span>
        </button>
      </div>
      <CheckboxSelect id={id} category={category} />
      <div className="cards__movies__delete">
        <BiXCircle />
        <span> Delete</span>
      </div>
    </div>
  );
}
export default Movies;
