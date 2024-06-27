import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ResetPasswordType } from '../types/forms'
import { ResetPasswordValidator } from '../services/validations'

import Button from '../components/Button'
import Input from '../components/Input'


function ResetPassword() {
  
  const input: ResetPasswordType = {};

  const [userInput, setInput] = useState(input);

  // function to store input inside of the input fields
  function storeInput(key: string, value: string | boolean) {
    setInput((prev) => {return {...prev, [key]: value}})
  }

  const navigate = useNavigate();

  async function submitForm() {

    if (ResetPasswordValidator(userInput)) 
      navigate("/reset-success", { replace: true })

  }

  return (
    <div className="px-6 py-4 rounded-xl md:shadow-all w-[500px]">
        <h3 className="font-ubuntu font-medium text-[36px]">Reset Password</h3>
        <p className="mt-3 font-ubuntu text-slate-500">Enter your new Password</p>

        <div className="w-full mt-4 p-1 flex flex-col justify-center items-center gap-6">
            <Input type="password" name="Password" placeholder="●●●●●●●●●" storeInput={storeInput} />
            <Input type="password" name="Confirm Password" placeholder="●●●●●●●●●" storeInput={storeInput} />
            <Button disabled={!ResetPasswordValidator(userInput)} sendInput={submitForm}>Reset Password</Button>
        </div>
    </div>
  )
}

export default ResetPassword