
function Button(props: any) {
  const disabled = props.disabled ? `w-full font-ubuntu font-medium bg-slate-400 text-slate-600 rounded-lg py-2 px-4 cursor-not-allowed` : `w-full font-ubuntu font-medium ${props.bgcolor ?? 'bg-slate-400'} ${props.textcolor ?? ''} rounded-lg py-2 px-4 ${!props.bgcolor ? 'hover:bg-slate-300':''}`

  return (
    <button className={disabled} onClick={props.sendInput}>{props.children}</button>
  )
}

export default Button