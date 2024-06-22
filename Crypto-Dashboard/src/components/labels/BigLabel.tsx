function BigLabel(props: any) {
  return (
    <span className={`rounded-xl font-bold text-[14px] px-2 py-1 ${props.style}`}>{props.children}</span>
  )
}

export default BigLabel