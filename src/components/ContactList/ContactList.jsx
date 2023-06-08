import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, setFilter } from "reduce/contactsSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Filter contacts"
      />
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
