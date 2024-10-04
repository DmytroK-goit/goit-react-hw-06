import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const getVisibleContacts = (contacts, name) => {
  if (!name) return contacts;
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase()) ||
      contact.number.includes(name)
  );
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts?.items || []);
  const name = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, name);

  return (
    <>
      <h2>Contacts List</h2>
      <ul className={s.list}>
        {visibleContacts.map((contact) => (
          <li className={s.li} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
