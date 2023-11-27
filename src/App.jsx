import { useEffect, useReducer } from 'react'
import AddUser from './components/addUser'
import ContactList from './components/contactList'
import userReducer from './components/userReducer'

const initialUser = [{ id: 1, name: 'Md Muzahid', email: 'example@gmail.com' }]
let nextId = 2

function App() {
  const [users, dispatch] = useReducer(userReducer, initialUser)

  // handle add user
  const handleAddUser = (name, email) => {
    dispatch({ type: 'added', id: nextId++, name, email })
  }

  // delete user
  const handleDeleteUser = (userId) => {
    dispatch({ type: 'delete', id: userId })
  }

  // local storage
  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users))
  // }, [users])

  // useEffect(() => {
  //   const getUsers = JSON.parse(localStorage.getItem('users'))
  //   if (getUsers) {
  //     setUsers(getUsers)
  //   }
  // }, [])

  return (
    <>
      <div className="w-[650px] mx-auto bg-slate-700 p-6 rounded-lg mt-20 text-white">
        <div>
          <h1 className="text-3xl text-center">Contact Manager</h1>
          <div className="py-10 border-b border-[#be123c]">
            <AddUser handleAddUser={handleAddUser} />
          </div>
          <div className="py-5 space-y-5">
            <ContactList users={users} handleDeleteUser={handleDeleteUser} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
