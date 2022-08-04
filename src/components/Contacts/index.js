import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";
import './styles.css';

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullName: "Ali", phoneNumber: "12345" },
    { fullName: "Mehmet", phoneNumber: "54321" },
    { fullName: "Ahmet", phoneNumber: "23145" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
