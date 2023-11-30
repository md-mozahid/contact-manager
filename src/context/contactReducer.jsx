import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actionTypes";
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

    // update contact

    // delete contact
    case DELETE_CONTACT: {
      const deleteContact =  contacts.filter((t) => t.id !== action.payload);
      setContactInLocalStorage(deleteContact)
      return deleteContact
    }

    default:
      return contacts;
  }
};

export default contactReducer;
