
function Navbar() {
  return (
    <div className="fixed w-full h-[50px] bg-white flex justify-between items-center mr-9 py-2 px-5">
        <div className="text-2xl font-bold tracking-wider ml-10">CryptoDash</div>
        <img className="w-10 border border-2 border-black rounded-full" src="https://robohash.org/shoaibwani"/>
    </div>
  )
}

export default Navbar