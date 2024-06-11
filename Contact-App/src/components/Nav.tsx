import firebaseLogo from '../assets/firebase.logo.svg'
import searchIcon from '../assets/search.icon.svg'

function Nav() {
  return (
    <div className="flex flex-col gap-6 justify-center align-center">
        <div className="px-5 py-2 flex justify-center items-center gap-4 rounded-xl bg-white">
            <img src={firebaseLogo} />
            <div className="font-bold text-[20px] font-inter">Firebase Contact App</div>
        </div>

        <div className="relative flex gap-4">
            <img className='absolute left-2 top-3' src={searchIcon} />
            <input className='h-auto px-9 py-2 w-9/12 bg-transparent border border-1 border-white rounded-lg text-white' type="text" placeholder='Search ...'/>
            <button className="absolute right-0 -top-3 rounded-[100%] h-auto bg-white w-2/12 py-2 text-[30px] font-bold" >+</button>
        </div>
    </div>
  )
}

export default Nav