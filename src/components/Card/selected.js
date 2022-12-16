import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../action/movies";

function CheckboxSelect({ id }) {
  const [selected, setSelected] = useState([]);
  const useDispatchh = useDispatch();
  const categoryState = useSelector((state) => state.movies.movies);

  const handleChange = (event) => {
    if (event.target.checked) {
      useDispatchh(changeCategory([categoryState[id].category, event.target.value], id));
    }
    else {
      useDispatchh(changeCategory(categoryState[id].category.filter((item) => item !== event.target.value), id));
    }
  };

  const categoryDataFull = ["Animation", "Comedy", "Drame", "Thriller"];
  return (
    <div>
      {categoryDataFull.map((item) => (
        <div key={item}>
          <input type="checkbox" value={item} onChange={(event) => handleChange(event, id)} />
          {item}
        </div>
      ))}
    </div>
  );
}

export default CheckboxSelect;
