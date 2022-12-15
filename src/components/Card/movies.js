import "./styles.scss";
import { BiLike, BiDislike, BiXCircle } from "react-icons/bi";

function Movies({
  title, category, likes, dislikes,
}) {
  const categoryData = ["Animation", "Comedy", "Drame", "Thriller"];
  return (
    <div className="cards__movies">
      <h2>{title}</h2>
      <h3>{category}</h3>
      <div className="cards__movies__likes">
        <div className="cards__movies__likes__item">
          <BiLike />
          <span>{likes}</span>
        </div>
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
