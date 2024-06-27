function Input(props: any) {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-1 rounded-md">
            <label className="font-medium text-sm font-ubuntu" htmlFor={props.name}>{props.name}</label>
            <input className="w-full border border-1 border-slate-200 px-2 py-1 rounded-lg outline-none" type={props.type} id={props.name} name={props.name} placeholder={props.placeholder} onInput={(event) => props.storeInput(props.name, event?.currentTarget.value)}/>
        </div>
    )
}

export default Input