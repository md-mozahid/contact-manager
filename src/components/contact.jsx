import { useContext } from 'react'
import { images } from '../constant'
import { UserContext } from '../context/context'

const Contact = ({ user }) => {
  const { deleteUser, setIsEditing } = useContext(UserContext)
  const { id, name, email } = user
  return (
    <>
      <h3 className="flex-1">Name : {name}</h3>
      <h3 className="flex-1">Email : {email}</h3>
      <div className="flex items-center justify-center gap-5 ">
        <button onClick={() => setIsEditing(true)}>
          <img className="" src={images.Edit} alt="edit" />
        </button>
        <button onClick={() => deleteUser(id)}>
          <img className="" src={images.Delete} alt="delete" />
        </button>
      </div>
    </>
  )
}

export default Contact
