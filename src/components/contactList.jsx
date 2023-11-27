import Contact from './contact'

const ContactList = ({ users, handleDeleteUser }) => {
  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center border border-[#475569] p-2 rounded-md">
          <Contact user={user} handleDeleteUser ={handleDeleteUser}/>
        </div>
      ))}
    </>
  )
}

export default ContactList
