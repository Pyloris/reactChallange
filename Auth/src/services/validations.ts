import { LoginInput, RegisterInput, ForgotPasswordType, ResetPasswordType } from "../types/forms";
import { z } from 'zod'

export function RegisterFormValidator(userInput: RegisterInput): boolean {

    const formInputSchema = z.object({
      Name: z.string().min(4).max(20),
      Surname: z.string().min(3).max(10),
      Email: z.string().email(),
      Password: z.string().min(8),
      "Confirm Password": z.string().min(8),
      terms: z.boolean()
    })

    try {
        if (formInputSchema.parse(userInput) && userInput.Password == userInput['Confirm Password']) {
            console.log("form submitted", userInput);
            return true;
        }
        else
            return false;
    }
    catch(err) {
      return false;
    }
}


export function LoginFormValidator(userInput: LoginInput): boolean {

    const formInputSchema = z.object({
      Email: z.string().email(),
      Password: z.string().min(8),
      remember: z.boolean().optional()
    })

    try {
        if (formInputSchema.parse(userInput)) {
            console.log("form submitted", userInput);
            return true;
        }
        else
            return false;
    }
    catch(err) {
      return false;
    }
}

export function ForgotPasswordValidator(userInput: ForgotPasswordType): boolean {

    const formInputSchema = z.object({
      Email: z.string().email()
    })

    try {
        if (formInputSchema.parse(userInput)) {
            console.log("form submitted", userInput);
            return true;
        }
        else
            return false;
    }
    catch(err) {
      return false;
    }
}

export function ResetPasswordValidator(userInput: ResetPasswordType): boolean {

    const formInputSchema = z.object({
      Password: z.string().min(8),
      "Confirm Password": z.string().min(8)
    })

    try {
        if (formInputSchema.parse(userInput) && userInput.Password == userInput["Confirm Password"]) {
            console.log("form submitted", userInput);
            return true;
        }
        else
            return false;
    }
    catch(err) {
      return false;
    }
}