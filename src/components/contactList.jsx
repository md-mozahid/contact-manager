import { useContacts } from '../context/contactContext'
import Contact from './contact'

const ContactList = () => {
  const contacts = useContacts()

  return (
    <>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex items-center border border-[#475569] p-2 rounded-md">
          <Contact contact={contact} />
        </div>
      ))}
    </>
  )
}

export default ContactList
