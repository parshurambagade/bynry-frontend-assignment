
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/ui/Header"
import Home from "./pages/Home"
import Profile from "./pages/Profile";
import Footer from "./components/ui/Footer";
import AdminPage from "./pages/AdminPage";
import { getAllUsers } from "./api/firestore-apis";
import { useEffect } from "react";
import Login from "./pages/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/:id",
    element: <Profile/>,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {

  useEffect(() => {
    getAllUsers();
},[])

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
