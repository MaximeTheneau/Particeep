import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../action/movies";

function CheckboxSelect({ id, category }) {
  const useDispatchh = useDispatch();
  const [selectedToggle, setSelectedToggle] = useState(false);

  const handleChange = (event) => {
    useDispatchh(changeCategory(event.target.value, id));
  };

  const categoryDataFull = ["Animation", "Comedy", "Drame", "Thriller"];
  return (
    <div className="card__selected">
      <div
        className="card__selected__title"
        onClick={() => {
          setSelectedToggle(!selectedToggle);
        }}
      >
        <button
          className="card__selected__category checked"
          type="button"
        >
          {category}
        </button>
        <h3>Selected category</h3>
      </div>
      {selectedToggle && categoryDataFull.map((item) => (
        <button
          key={item}
          className={`${category === item ? "checked" : ""} card__select__item`}
          onClick={(event) => handleChange(event)}
          value={item}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CheckboxSelect;
