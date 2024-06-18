import React from "react";
import { useState } from "react";

const Output = ({ contacts, setcontacts, setContact, setEditingIndex }) => {
  const handleEdit = (index) => {
    setEditingIndex(index);
    setContact(contacts[index]);
  };

  function remove(item) {
    setcontacts(contacts.filter((contact) => contact !== item));
  }

  return (
    <div className="mt-8 w-150 mx-auto grid gap-4 grid-cols-3 ">
      {contacts.map((item, index) => (
        <div
          className=" font-semibold text-green-950 border-green-950  pl-2"
          key={index}
        >
          {" "}
          <div> {item.first} </div> <div> {item.second} </div>{" "}
          <div> {item.third} </div>
          <div className="mt-2">
            <span className=" border mr-2 rounded-md text-green-950 border-green-950 px-2 bg-green-200">
              {" "}
              <button onClick={() => handleEdit(index)}>Edit</button>
            </span>{" "}
            <span className="border  rounded-md px-2 text-red-950 border-red-950 bg-red-200">
              {" "}
              <button onClick={() => remove(item)}>Delete</button>
            </span>{" "}
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default Output;
