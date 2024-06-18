import React, { useState } from "react";
import Output from "./Output";
import Form from "./Form";
const Inputs = () => {
  const [contacts, setcontacts] = useState([]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [contact, setContact] = useState({ first: "", second: "", third: "" });

  return (
    <>
      <div className="mt-4 w-150 mx-auto ">
        <Form
          contacts={contacts}
          setcontacts={setcontacts}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
          contact={contact}
          setContact={setContact}
        />
      </div>

      <Output
        contacts={contacts}
        setcontacts={setcontacts}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
        contact={contact}
        setContact={setContact}
      />
    </>
  );
};

export default Inputs;
