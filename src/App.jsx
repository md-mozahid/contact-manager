import ContactForm from './components/contactForm'
import ContactList from './components/contactList'
import { images } from './constant'

function App() {
  return (
    <>
      <div className="w-[650px] mx-auto bg-slate-700 p-6 rounded-lg mt-20 text-white">
        <div>
          <h1 className="text-3xl text-center">Contact Manager</h1>
          <div className="flex items-center justify-between mt-10 pb-3 border-b border-[#be123c]">
            <h1>Logo</h1>
            <label className="">
              <select
                className="bg-slate-700 outline-0 border px-2 py-1 rounded-md"
                name=""
                id="">
                <option>Sort</option>
                <option value="az">a-z</option>
                <option value="za">z-a</option>
              </select>
            </label>
            <div className="flex items-center justify-between bg-slate-50 rounded-md">
              <input
                type="search"
                className="rounded-md text-lg bg-transparent py-1 pl-3 text-slate-800 outline-none w-5 focus:w-72 focus:transition-all"
              />
              <img
                className=" w-4 mr-2 "
                src={images.Search}
                alt=""
              />
            </div>
          </div>

          <div className="py-6 border-b border-[#be123c]">
            <ContactForm />
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
