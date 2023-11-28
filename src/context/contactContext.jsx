import { createContext, useContext, useEffect, useReducer } from 'react'

// create context
export const ContactContext = createContext(null)
export const ContactDispatchContext = createContext(null)

// create reducer
import contactReducer from './contactReducer'
import { initialContact } from './initialContact'

// create provider
export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactReducer, initialContact)

  // local storage
  // get item
  useEffect(() => {
    const contact = JSON.parse(localStorage.getItem('contact'))
    if (contact) {
      dispatch(contact)
    }
  }, [])

  // set item
  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts))
  }, [contacts])

  return (
    <ContactContext.Provider value={contacts}>
      <ContactDispatchContext.Provider value={dispatch}>
        {children}
      </ContactDispatchContext.Provider>
    </ContactContext.Provider>
  )
}

// create custom hook
export const useContacts = () => {
  return useContext(ContactContext)
}
export const useContactsDispatch = () => {
  return useContext(ContactDispatchContext)
}
