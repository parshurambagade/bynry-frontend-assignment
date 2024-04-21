
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/ui/Header"
import Home from "./pages/Home"
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/:id",
    element: <Profile/>,
  },
]);

function App() {

  
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
