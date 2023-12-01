import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from "./actionTypes";

// handle add contact
export const addContact = (payload) => {
  return { type: ADD_CONTACT, payload };
};
// edit contact
export const editContact = (payload) => {
  return { type: EDIT_CONTACT, payload };
};
// handle update contact
export const updateContact = (payload) => {
  return { type: UPDATE_CONTACT, payload };
};

// delete contact
export const deleteContact = (id) => {
  return { type: DELETE_CONTACT, payload: id };
};
