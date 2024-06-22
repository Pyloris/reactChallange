
function FullCard(props: any) {
  return (
    <div className="w-full rounded-xl bg-white border border-2 border-grayish px-7 py-3">
        {props.children}
    </div>
  )
}

export default FullCard