import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const surchId = useId();

  return (
    <div>
      <form className={s.form}>
        <label htmlFor={surchId}>
          Find contacts by name
          <input
            type="text"
            id={surchId}
            value={value}
            onChange={(e) => onFilter(e.target.value)}
            placeholder="Enter surch name"
          />
        </label>
      </form>
    </div>
  );
};
export default SearchBox;
