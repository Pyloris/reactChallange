import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Register from "./screens/Register"
import EmailVerification from './screens/EmailVerification'
import Login from './screens/Login'
import RegisterationSuccess from './screens/RegistrationSuccess'
import ResetSuccess from './screens/ResetSuccess'
import ResetEmailSent from './screens/ResetEmailSent'
import ForgotPassword from './screens/ForgotPassword'
import ResetPassword from './screens/ResetPassword'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login /> 
  },
  {
    path: "/verify",
    element: <EmailVerification />
  },
  {
    path: '/registeration-success',
    element: <RegisterationSuccess />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/reset-email-sent',
    element: <ResetEmailSent />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/reset-success',
    element: <ResetSuccess />
  }
])

function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
