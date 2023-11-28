import { createContext, useReducer, useState } from 'react'
import userReducer from '../components/userReducer'

// create context
export const UserContext = createContext()

// create provider
const initialUser = [{ id: 1, name: 'Md Muzahid', email: 'example@gmail.com' }]
let nextId = 2

export const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, initialUser) 
  const [isEditing, setIsEditing] = useState(false)

  // handle add user
  const addUser = (name, email) => {
    if (name === '' || email === '') {
      alert('Please fill the input value')
    } else {
      dispatch({ type: 'added', id: nextId++, name, email })
    }
  }

  // delete user
  const deleteUser = (userId) => {
    dispatch({ type: 'delete', id: userId })
  }

  const value = {
    isEditing,
    setIsEditing,
    users,
    addUser,
    deleteUser,
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
