import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./screens/Dashboard"
import Transactions from "./screens/Transactions"
import Support from "./screens/Support"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/transactions",
    element: <Transactions />
  },
  {
    path: "/support",
    element: <Support />
  }
])

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
