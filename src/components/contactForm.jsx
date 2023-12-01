import { useEffect, useState } from "react";
import { useContacts, useContactsDispatch } from "../context/contactContext";
import { addContact, updateContact } from "../context/actions";

// add contact button state changer function
const btnState = (name) => ({
  name,
  class: `px-3 py-1 uppercase text-lg ${
    name === "add"
      ? "bg-green-400 hover:bg-green-600"
      : "bg-rose-400 hover:bg-rose-600"
  } font-semibold rounded duration-500 hover:tracking-wide`,
});

const contactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);
  const [submitBtn, setSubmitBtn] = useState(btnState("add"));

  const contacts = useContacts();
  const dispatch = useContactsDispatch();

  // change the form input when anyone click the edit button
  useEffect(() => {
    const contact = contacts.find((c) => c.editable);

    if (contact) {
      setId(contact.id);
      setName(contact.name);
      setEmail(contact.email);
      setSubmitBtn(btnState("update"));
    }
  }, [contacts]);

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
          // className="px-2 py-1 border rounded-md hover:bg-slate-500 tracking-wider"
          className={submitBtn.class}
          onClick={() => {
            const contact = { name, email, editable: false };
            if (submitBtn.name === "add") {
              dispatch(addContact(contact));
            } else if (submitBtn.name === "update") {
              dispatch(updateContact({ ...contact, id }));
              setSubmitBtn(btnState("add"));
            }
            setEmail(""), setName("");
          }}
        >
          {submitBtn.name}
        </button>
      </div>
    </>
  );
};

export default contactForm;
