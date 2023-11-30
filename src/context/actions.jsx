import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actionTypes";

// handle add contact
export const addContact = (newVal) => {
  return { type: ADD_CONTACT, payload: newVal };
};

// handle update contact
export const updateContact = (payload) => {
  return { type: UPDATE_CONTACT, payload };
};

// delete contact
export const deleteContact = (id) => {
  return { type: DELETE_CONTACT, payload: id };
};
