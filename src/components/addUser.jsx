const AddUser = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <input
          className="px-5 py-1 rounded-md text-lg text-slate-800 outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="px-5 py-1 rounded-md text-lg text-slate-800 outline-none"
          type="text"
          placeholder="Email"
        />
        <button className="px-2 py-1 border rounded-md hover:bg-slate-500 tracking-wider">
          Add
        </button>
      </div>
    </>
  )
}

export default AddUser
