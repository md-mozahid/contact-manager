import { useEffect, useState } from 'react'
import AddUser from './components/addUser'
import ContactList from './components/contactList'

const initialUser = [{ id: 1, name: 'Md Muzahid', email: 'example@gmail.com' }]
let nextId = 2

function App() {
  const [users, setUsers] = useState(initialUser)

  // handle add user
  const handleAddUser = (name, email) => {
    setUsers([...users, { id: nextId++, name, email }])
  }

  // delete user
  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId))
  }

  // local storage
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'))
    if (users) {
      setUsers(users)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

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
