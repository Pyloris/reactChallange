import Button from "./Button"


function Card(props: any) {
  return (
      <div className="p-4 w-[340px] h-[167px] bg-slate-600/20 backdrop-blur-xl rounded-lg border-none">
        <div className="w-full flex">
          <img className="w-[130px] h-[130px]" src={props.img} />
          <div className="px-4 pt-1">
            <p className="text-white font-bold tracking-wide text-lg">{props.title}</p>
            <p className="w-2xl  h-xl text-white text-[14px] overflow-hidden">{props.children}</p>
          </div>
        </div>
        <div className="w-full flex justify-end mt-[-20px]">
          <Button>{props.price}</Button>
        </div>
      </div>
 )
}

export default Card