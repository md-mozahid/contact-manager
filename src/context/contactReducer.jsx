import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actionTypes";

let nextId = 2;

const contactReducer = (users, action) => {
  const { type, payload } = action;
  switch (type) {
    // add contact
    case ADD_CONTACT: {
      let contactToAdd = {
        id: nextId++,
        ...payload,
      };
      return [contactToAdd, ...users];
    }

    // update contact
    case UPDATE_CONTACT: {
      const { id, updateContact } = payload;
      const contacts = users.map((user) => {
        if (user.id === id) {
          return {
            id,
            ...updateContact,
          };
        } else {
          return user;
        }
      });
      return [...contacts];
    }

    // delete contact
    case DELETE_CONTACT: {
      const updateContacts = users.filter((user) => user.id !== payload);
      return [...updateContacts];
    }

    default:
      return users;
  }
};

export default contactReducer;
