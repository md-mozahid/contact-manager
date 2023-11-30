import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "./actionTypes";
import { setContactInLocalStorage } from "./initialContact";

// create id
function nextId(state) {
  const maxId = state.reduce((acc, curr) => Math.max(curr.id, acc), -1);
  return maxId && maxId >= 0 ? maxId + 1 : 1;
}

const contactReducer = (contacts = [], action = {}) => {
  switch (action.type) {
    // add contact
    case ADD_CONTACT: {
      const addCloneContact = [
        ...contacts,
        {
          id: nextId(contacts),
          ...action.payload,
        },
      ];
      setContactInLocalStorage(addCloneContact);
      return addCloneContact;
    }

    // edit contact
    case EDIT_CONTACT: {
      const editContact = contacts.map((item) => {
        let contact = {};
        if (item.id === action.payload.id) {
          contact = { ...item, editable: true };
        } else {
          contact = { ...item, editable: false };
        }
        return contact;
      });

      setContactInLocalStorage(editContact);
      return editContact;
    }

    // update contact
    case UPDATE_CONTACT: {
      const updateContact = contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return {
            id: contact.id,
            editable: false,
            name: action.payload.name,
            email: action.payload.email,
          };
        } else {
          return { ...contact, editable: false };
        }
      });
      setContactInLocalStorage(updateContact);
      return updateContact;
    }

    // delete contact
    case DELETE_CONTACT: {
      const deleteContact = contacts.filter((t) => t.id !== action.payload);
      setContactInLocalStorage(deleteContact);
      return deleteContact;
    }

    default:
      return contacts;
  }
};

export default contactReducer;
