import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setContactFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const surchId = useId();
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const handleChange = (event) => {
    dispatch(setContactFilter(event.target.value));
  };

  return (
    <div>
      <form className={s.form}>
        <label htmlFor={surchId}>
          Find contacts by name
          <input
            type="text"
            id={surchId}
            value={query}
            onChange={handleChange}
            placeholder="Enter surch name"
          />
        </label>
      </form>
    </div>
  );
};
export default SearchBox;
