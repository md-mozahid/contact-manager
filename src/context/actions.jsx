import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actionTypes";

// handle add contact
export const addContact = (newVal) => {
  return { type: ADD_CONTACT, payload: newVal };
};

// handle update contact
export const updateContact = (id, updateContact) => {
  return { type: UPDATE_CONTACT, payload: { id, updateContact } };
};

// delete contact
export const deleteContact = (id) => {
  return { type: DELETE_CONTACT, payload: id };
};
