import AddUser from './components/addUser'
import ContactList from './components/contactList'

function App() {
  return (
    <>
      <div className="w-[650px] mx-auto bg-slate-700 p-6 rounded-lg mt-20 text-white">
        <div>
          <h1 className="text-3xl text-center">Contact Manager</h1>
          <div className="py-10 border-b border-[#be123c]">
            <AddUser />
          </div>
          <div className="py-5 space-y-5">
            <ContactList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
