import images from '../constant/images'

const Contact = () => {
  return (
    <>
      <h3 className="flex-1">Name : MD Mozahid</h3>
      <h3 className="flex-1">Email : example@gmail.com</h3>
      <div className="flex items-center justify-center gap-5 ">
        <button>
          <img className="" src={images.Edit} alt="edit" />
        </button>
        <button>
          <img className="" src={images.Delete} alt="edit" />
        </button>
      </div>
    </>
  )
}

export default Contact
