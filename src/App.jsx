
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/ui/Header"
import Home from "./pages/Home"
import Profile from "./pages/Profile";
import Footer from "./components/ui/Footer";

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
      <Footer />
    </>
  )
}

export default App
