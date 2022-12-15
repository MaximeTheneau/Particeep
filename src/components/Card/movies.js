import "./styles.scss";


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
          <i className="likes" />
          <span>{likes}</span>
        </div>
        <div className="cards__movies__likes__item">
          <i className="dislikes" />
          <span>{dislikes}</span>
        </div>
      </div>
      <select className="cards__movies__select" multiple>
        {categoryData.map((categoryItem) => (
          <option value={categoryItem}>{categoryItem}</option>
        ))}
      </select>
      <span className="cards__movies__delete">Delete</span>
    </div>
  );
}
export default Movies;
