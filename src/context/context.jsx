import { createContext, useReducer, useState } from "react";
import contactReducer from "./contactReducer";
import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actionTypes";

const initialContact = [{ id: 1, name: "Ahnaf", email: "ahnaf@gmail.com" }];

// create context
export const ContactContext = createContext();

// create provider
export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactReducer, initialContact);
  const [isEditing, setIsEditing] = useState(false);

  // handle add contact
  const addContact = (text) => {
    dispatch({ type: ADD_CONTACT, payload: text });
  };
  // handle update contact
  const updateContact = (id, update) => {
    dispatch({ type: UPDATE_CONTACT, payload: { id, update } });
  };

  // delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const value = {
    isEditing,
    setIsEditing,
    contacts,
    addContact,
    updateContact,
    deleteContact,
  };
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};
