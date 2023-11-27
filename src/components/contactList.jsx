import { useContext } from 'react'
import { UserContext } from '../context/context'
import Contact from './contact'

const ContactList = () => {
  const { users } = useContext(UserContext)
  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center border border-[#475569] p-2 rounded-md">
          <Contact user={user} />
        </div>
      ))}
    </>
  )
}

export default ContactList
