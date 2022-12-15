function Card({
  title, category, likes, dislikes,
}) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{category}</h3>
      <div className="card__likes">
        <div className="card__likes__item">
          <i className="likes" />
          <span>{likes}</span>
        </div>
        <div className="card__likes__item">
          <i className="dislikes" />
          <span>{dislikes}</span>
        </div>
      </div>
      <select className="card__select" multiple>
        <option value="1">1</option>
      </select>
      <span className="card__delete">Delete</span>
    </div>
  );
}
export default Card;
