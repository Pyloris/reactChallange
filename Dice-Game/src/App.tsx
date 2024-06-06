import { createBrowserRouter,  RouterProvider } from 'react-router-dom';

import Hero from './screens/Hero'
import Play from './screens/Play'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />
  },
  {
    path: "/play",
    element: <Play />
  }
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
