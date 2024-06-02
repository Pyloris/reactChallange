import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './screens/Home';
import ErrorScreen from './screens/ErrorScreen'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorScreen />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
