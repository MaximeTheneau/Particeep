// == Import
import { useDispatch, useSelector } from "react-redux";
import reactLogo from "./react-logo.svg";
import "./styles.css";

// == Composant
function App() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "counter/increment" });
  };
  increment();
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1>
    </div>
  );
}

// == Export
export default App;
