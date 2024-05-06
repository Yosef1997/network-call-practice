import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Register, User } from "./pages"

const router = createBrowserRouter([
  { path: "/", element: <Register />, index: true },
  {
    path: "/user",
    element: <User />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
