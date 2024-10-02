import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <ul>
      {contacts.map((contact) => (
        <li className={s.li} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
