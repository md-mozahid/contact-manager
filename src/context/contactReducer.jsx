let nextId = 1

const contactReducer = (contacts, action) => {
  switch (action.type) {
    // add contact
    case 'added': {
      return [
        ...contacts,
        {
          id: nextId++,
          name: action.name,
          email: action.email,
        },
      ]
    }

    // update contact
    case 'updated': {
      const { id, updateContact } = payload
      const contacts = contacts.map((contact) => {
        if (contact.id === id) {
          return {
            id,
            ...updateContact,
          }
        } else {
          return contact
        }
      })
      return [...contacts]
    }

    // delete contact
    case 'deleted': {
      return contacts.filter((t) => t.id !== action.id)
    }

    default:
      return contacts
  }
}

export default contactReducer
