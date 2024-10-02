import s from "./Contact.module.css";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = ({ data, onDelete }) => {
  return (
    <div className={s.contact} key={data.id}>
      <div>
        <p>
          <IoPeopleSharp /> {data.name}
        </p>
        <p>
          <FaPhoneAlt /> {data.number}
        </p>
      </div>
      <button type="button" onClick={() => onDelete(data.id)}>
        Dalete
      </button>
    </div>
  );
};
export default Contact;
