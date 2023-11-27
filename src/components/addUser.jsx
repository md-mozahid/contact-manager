import { useState } from 'react'

const AddUser = ({ handleAddUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
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
            handleAddUser(name, email), setEmail(''), setName('')
          }}>
          Add
        </button>
      </div>
    </>
  )
}

export default AddUser
