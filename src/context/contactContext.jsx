import { createContext, useContext, useReducer } from 'react'
import { ContactContext, ContactDispatchContext } from './contactContext'

// create context
export const ContactContext = createContext(null)
export const ContactDispatchContext = createContext(null)

// create reducer
import contactReducer from './contactReducer'
import { initialContacts } from './initialContact'

// create provider
export const ContactProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactReducer, initialContacts)

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
