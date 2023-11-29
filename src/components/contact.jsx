import { images } from "../constant";
import { useContactsDispatch } from "../context/contactContext";
import { deleteContact } from "../context/actions";

const Contact = ({ contact }) => {
  const dispatch = useContactsDispatch();
  const { id, name, email } = contact;
console.log(id)
  return (
    <>
      <h3 className="flex-1">Name : {name}</h3>
      <h3 className="flex-1">Email : {email}</h3>
      <div className="flex items-center justify-center gap-5 ">
        <button
        // onClick={() => setIsEditing(true)}
        >
          <img className="" src={images.Edit} alt="edit" />
        </button>
        <button onClick={() => dispatch(deleteContact(id))}>
          <img className="" src={images.Delete} alt="delete" />
        </button>
      </div>
    </>
  );
};

export default Contact;
