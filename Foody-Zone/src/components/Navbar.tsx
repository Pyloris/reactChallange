import Button from './Button'


function Navbar() {
  const categories = [
    'All',
    'Breakfast',
    'Lunch',
    'Dinner'
  ];

  return (
    <div className='p-10 flex flex-col gap-6 justify-center items-center w-full h-[241px] bg-gray'>
        <div className="w-full mb-7 flex justify-between items-center">
          <div className="font-bold text-[32px] tracking-widest text-white">F<span className="text-red-700">oo</span>dy Z<span className="text-red-700">o</span>ne</div>
          <div><input className="appearance-none bg-transparent border border-2 border-red-700 rounded-sm pl-4 py-1" type="text" placeholder="Search Food..."/></div>
        </div>
        <div>
          <div className="flex gap-5">
            {
              categories.map(category => <Button>{category}</Button>)
            }
          </div>
        </div>
    </div>
  )
}

export default Navbar