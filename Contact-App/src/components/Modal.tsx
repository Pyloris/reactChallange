
function Modal() {
  return (
    <div className="absolute top-[30%] left-[7%] bg-white w-[348px] h-[244px] p-7 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <label className="text-start" htmlFor="name">Name</label>
            <input className="appearance-none border border-1 border-black py-1" type="text" id="name" name="name"/>
        </div>

        <div className="flex flex-col gap-2">
            <label className="text-start" htmlFor="email">Email</label>
            <input className="appearance-none border border-1 border-black py-1" type="email" name="email" id="email" />
        </div>

        <div className="w-full flex justify-end">
            <button className="rounded-lg bg-yellow-500 px-4 py-2 border border-1 border-black">Add Contact</button>
        </div>
    </div>
  )
}

export default Modal