
function Button(props: any) {
  return (
    <button className="min-w-[81px] min-h-[38px] bg-purp rounded-lg">
        <div className="w-full h-full px-4">
            {props.children}
        </div>
    </button>
  )
}

export default Button