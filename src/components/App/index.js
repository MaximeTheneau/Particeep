// == Import
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../action/movies";
import Movies from "../Card/movies";

import "./styles.css";

// == Composant
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const moviesData = useSelector((state) => state.movies.movies);
  return (
    <>
      <h1>Particeep</h1>
      <div className="cards">
        {moviesData.map((movie) => (
          <Movies
            key={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
          />
        ))}
      </div>
    </>
  );
}

// == Export
export default App;
