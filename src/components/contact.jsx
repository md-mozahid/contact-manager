import { images } from '../constant'

const Contact = ({ user, handleDeleteUser }) => {
  const { id, name, email } = user
  return (
    <>
      <h3 className="flex-1">Name : {name}</h3>
      <h3 className="flex-1">Email : {email}</h3>
      <div className="flex items-center justify-center gap-5 ">
        <button>
          <img className="" src={images.Edit} alt="edit" />
        </button>
        <button onClick={() => handleDeleteUser(id)}>
          <img className="" src={images.Delete} alt="delete" />
        </button>
      </div>
    </>
  )
}

export default Contact
