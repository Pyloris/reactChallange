import { useRouteError } from 'react-router-dom'


function ErrorScreen() {
    const error = useRouteError()
    console.error(error);

  return (
    <div className="h-screen w-screen bg-slate-400 flex flex-col justify-center items-center">
        <div>{error.statusText || error.message}</div>
        <div>{error.data}</div>
    </div>
  )
}

export default ErrorScreen