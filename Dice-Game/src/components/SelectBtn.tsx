import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { select, unselect } from '../app/slices/selected.slice'


function SelectBtn(props: any) {
  let selected = useSelector((state: RootState) => state.selected.value)
  let dispatch = useDispatch()

  function clickHandler() {
    if (selected && Number(props.value) == selected)
      dispatch(unselect());
    else
      dispatch(select({ value: Number(props.value) }));
  }

  const selectedStyle = "flex justify-center items-center w-[60px] h-[60px] p-4 text-center bg-black text-white";
  const notSelectedStyle = "flex justify-center items-center w-[60px] h-[60px] py-4 px-4 text-center border border-2 border-black hover:bg-black hover:text-white transition-all duration-50";

  return (
    <div onClick={() => clickHandler()}>
    {
      Number(props.value) == selected ? 
      <div id={props.value} className={selectedStyle}><p className="font-bold text-2xl">{props.value}</p></div> : 
      <div id={props.value} className={notSelectedStyle}><p className="font-bold text-2xl">{props.value}</p></div>
    }
    </div>
  )
}

export default SelectBtn