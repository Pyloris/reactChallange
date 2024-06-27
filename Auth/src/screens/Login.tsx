import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginInput } from '../types/forms'
import { LoginFormValidator } from '../services/validations'

import Button from '../components/Button'
import Input from '../components/Input'


function Login() {

  const input: LoginInput = {};

  const [userInput, setInput] = useState(input);

  // function to store input inside of the input fields
  function storeInput(key: string, value: string | boolean) {
    setInput((prev) => {return {...prev, [key]: value}})
  }

  const navigate = useNavigate();

  async function submitForm() {

    if (LoginFormValidator(userInput)) 
      navigate("/dashboard", { replace: true })

  }

  return (
    <div className="px-6 py-4 rounded-xl md:shadow-all w-[500px]">
        <h3 className="font-ubuntu font-medium text-[36px]">Welcome to Crypto App</h3>
        <p className="mt-3 font-ubuntu text-slate-500">Enter your credentials to access your account.</p>

        <div className="w-full mt-4 p-1 flex flex-col justify-center items-center gap-6">

            <Input type="email" name="Email" placeholder="name@example.com" storeInput={storeInput} />
            <Input type="password" name="Password" placeholder="●●●●●●●●●" storeInput={storeInput} />
            <div className="w-full ml-5 flex gap-4 items-center justify-start">
            <input type="checkbox" name="remember" onClick={(event) => storeInput("terms", event.currentTarget.checked)} />
            <p className="text-[14px] flex justify-between items-center w-full pr-4"><span>Remember Me </span><span className="text-purple-600 font-bold"><Link to="/forgot-password">Forgot password?</Link></span></p>
            </div>
            <Button disabled={!LoginFormValidator(userInput)} sendInput={submitForm}>Login</Button>
            <Button sendInput={() => navigate("/")}>Create Account</Button>
        </div>
    </div>
  )
}

export default Login