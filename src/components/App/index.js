// == Import
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../action/movies";
import reactLogo from "./react-logo.svg";
import "./styles.css";

// == Composant
function App() {
  // == State
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  console.log("useSelector", useSelector((state) => state));

  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1>
    </div>
  );
}

// == Export
export default App;
