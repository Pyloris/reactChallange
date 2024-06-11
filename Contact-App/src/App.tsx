import Nav from './components/Nav'
import Nocontact from './components/Nocontact'
import Contact from './components/Contact'
import Modal from './components/Modal';

function App() {
  let nums = [];
  for (let i = 0; i < 2; i++) {
    nums.push(i);
  }
  return (
    <div className="w-full h-screen bg-gray">
      <center className="relative  w-[393px] h-full mx-auto pt-4">
        <Nav />
        {/* <Nocontact /> */}
        <Modal />
        <div className="mt-4 h-[85%] flex flex-col gap-3 overflow-scroll no-scrollbar">
          {
            nums.map(i => <Contact key={i} />)
          }
        </div>
      </center>
    </div>
  )
}

export default App
