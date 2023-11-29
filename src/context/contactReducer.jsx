import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actionTypes";

let nextId = 1;

const contactReducer = (contacts, action) => {
  switch (action.type) {
    // add contact
    case ADD_CONTACT: {
      return [
        ...contacts,
        {
          id: nextId++,
          ...action.payload,
        },
      ];
    }

    // update contact
    case UPDATE_CONTACT: {
      const { id, updateContact } = payload;
      const contacts = contacts.map((contact) => {
        if (contact.id === id) {
          return {
            id,
            ...updateContact,
          };
        } else {
          return contact;
        }
      });
      return [...contacts];
    }

    // delete contact
    case DELETE_CONTACT: {
      return contacts.filter((t) => t.id !== action.payload);
    }

    default:
      return contacts;
  }
};

export default contactReducer;
