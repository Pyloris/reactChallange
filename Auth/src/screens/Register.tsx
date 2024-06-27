import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterInput } from '../types/forms'
import { RegisterFormValidator } from '../services/validations'

import Button from '../components/Button'
import Input from '../components/Input'


function Register() {

  const input: RegisterInput = {};

  const [userInput, setInput] = useState(input);

  // function to store input inside of the input fields
  function storeInput(key: string, value: string | boolean) {
    setInput((prev) => {return {...prev, [key]: value}})
  }

  const navigate = useNavigate();

  async function submitForm() {

    if (RegisterFormValidator(userInput)) 
      navigate("/verify", { replace: true })

  }

  return (
    <div className="px-6 py-4 rounded-xl md:shadow-all w-[500px]">
        <h3 className="font-ubuntu font-medium text-[36px]">Welcome to Crypto App</h3>
        <p className="mt-3 font-ubuntu text-slate-500">Create a free account by filling data below.</p>

        <div className="w-full mt-4 p-1 flex flex-col justify-center items-center gap-6">
            <div className="flex items-start justify-center gap-4">
            <Input type="text" name="Name" placeholder="James" storeInput={storeInput} />
            <Input type="text" name="Surname" placeholder="Arthur" storeInput={storeInput}/>
            </div>
            <Input type="email" name="Email" placeholder="name@example.com" storeInput={storeInput} />
            <Input type="password" name="Password" placeholder="●●●●●●●●●" storeInput={storeInput} />
            <Input type="password" name="Confirm Password" placeholder="●●●●●●●●●" storeInput={storeInput} />
            <div className="w-full ml-5 flex gap-4 items-center justify-start">
            <input type="checkbox" name="terms" onClick={(event) => storeInput("terms", event.currentTarget.checked)} />
            <p className="text-[14px]">I agree with <span className="text-purple-600 font-bold">Terms & Conditions</span></p>
            </div>
            <Button disabled={!RegisterFormValidator(userInput)} sendInput={submitForm}>Create Account</Button>
            <p className="font-ubuntu text-[15px]">Already have an account? <span className="text-purple-700 font-medium"><Link to="/login">Log In</Link></span></p>
        </div>
    </div>
  )
}

export default Register