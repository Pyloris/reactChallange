import Contact from '../assets/contact.svg'

function Nocontact() {
  return (
    <div className="absolute top-[50%] left-[14%] flex gap-4 justify-center items-center">
        <img src={Contact} />
        <p className="font-bold text-2xl text-white">No Contact Found</p>
    </div>
  )
}

export default Nocontact