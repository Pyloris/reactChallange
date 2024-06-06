function Button(props: any) {

  return (
    <>
        {
          props.theme == "dark" ? <button className="w-[220px] h-[44px] bg-black text-white rounded-md font-bold font-roboto leading-4">{props.text}</button> : <button className="w-[220px] h-[44px] bg-white text-black rounded-md font-bold font-roboto border-2 border-gray-600">{props.text}</button>
        }
    </>
  )
}

export default Button