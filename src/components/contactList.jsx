import { useContext } from "react";
import { ContactContext } from "../context/context";
import Contact from "./contact";

const ContactList = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <>
      {contacts.map((user) => (
        <div
          key={user.id}
          className="flex items-center border border-[#475569] p-2 rounded-md"
        >
          <Contact user={user} />
        </div>
      ))}
    </>
  );
};

export default ContactList;
