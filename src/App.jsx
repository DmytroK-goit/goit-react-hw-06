import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import initContacts from "./assets/contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem("save-contact");
    return savedContact ? JSON.parse(savedContact) : initContacts;
  });
  const [filter, setFilter] = useState("");

  const [newContact, setNewContact] = useState({ name: "", number: "" });

  useEffect(() => {
    localStorage.setItem("save-contact", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  const handleSubmit = (newContact) => {
    const id = nanoid();
    const contactWithId = { ...newContact, id };
    setContacts((prevContacts) => [...prevContacts, contactWithId]);
    setNewContact({ name: "", number: "" });
  };
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        contact={newContact}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContact} onDelete={deleteContact} />
    </>
  );
}

export default App;
