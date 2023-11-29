import { useState } from "react";
import { useContactsDispatch } from "../context/contactContext";
import { addContact } from "../context/actions";

const contactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useContactsDispatch();

  return (
    <>
      <div className="flex items-center justify-between">
        <input
          className="px-5 py-1 rounded-md text-lg text-slate-800 outline-none"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="px-5 py-1 rounded-md text-lg text-slate-800 outline-none"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="px-2 py-1 border rounded-md hover:bg-slate-500 tracking-wider"
          onClick={() => {
            dispatch(addContact({name, email}));
            setEmail(""), setName("");
          }}
        >
          {/* {isEditing ? 'Update' : 'Add'} */}
          Add
        </button>
      </div>
    </>
  );
};

export default contactForm;
