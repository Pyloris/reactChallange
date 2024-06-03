import Contact from './screens/Contact'
import Logo from '../public/icon.png'

function App() {

  return (
    <>
    <nav className='w-full flex justify-start items-center px-10 fixed bg-slate-50'>
      <img src={Logo} />
    </nav>

    <div className="h-screen w-full">
      <Contact />
    </div>
    </>
  )
}

export default App