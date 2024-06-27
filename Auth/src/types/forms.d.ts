export type RegisterInput = {
    Name?: string,
    Surname?: string,
    Email?: string,
    Password?: string,
    "Confirm Password"?: string,
    "terms"?: boolean
}


export type LoginInput = {
    Email?: string,
    Password?: string,
    remember?: boolean
}


export type ForgotPasswordType = {
    Email?: string,
}


export type ResetPasswordType = {
    Password?: string,
    "Confirm Password"?: string
}