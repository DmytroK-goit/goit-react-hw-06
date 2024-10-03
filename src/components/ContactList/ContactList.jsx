import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const getVisibleContacts = (contacts, query) => {
  if (!query) return contacts;
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase()) ||
      contact.number.includes(query)
  );
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts?.items || []);
  console.log(contacts);

  const query = useSelector((state) => state.search.query);
  const visibleContacts = getVisibleContacts(contacts, query);

  return (
    <>
      <h2>Contact List</h2>
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
