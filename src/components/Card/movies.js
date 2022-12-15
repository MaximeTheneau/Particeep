import "./styles.scss";
import { useState } from "react";
import { BiLike, BiDislike, BiXCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { newMoviesActionAction } from "../../action/movies";

function Movies({
  title, category, likes, dislikes, id,
}) {
  const dispatch = useDispatch();
  const [newLikes, setNewLikes] = useState(true);

  const moviesState = useSelector((state) => state.movies.movies);
  const categoryData = ["Animation", "Comedy", "Drame", "Thriller"];
  const handleClickLike = (likesEvent, idEvent) => {
    setNewLikes(!newLikes);
    console.log(likesEvent, idEvent);
    const newMovies = moviesState.map((movie) => {
      if (movie.id === idEvent) {
        return {
          ...movie,
          likes: newLikes ? likesEvent + 1 : likesEvent - 1,
        };
      }
      return movie;
    });
    dispatch(newMoviesActionAction(newMovies));
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
        <div className="cards__movies__likes__item">
          <BiDislike />
          <span>{dislikes}</span>
        </div>
      </div>
      <select className="cards__movies__select" multiple>
        {categoryData.map((categoryItem) => (
          <option value={categoryItem}>{categoryItem}</option>
        ))}
      </select>
      <div className="cards__movies__delete">
        <BiXCircle />
        <span> Delete</span>
      </div>
    </div>
  );
}
export default Movies;
