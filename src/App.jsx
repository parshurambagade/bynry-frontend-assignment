
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from "react-router-dom";
import Header from "./components/ui/Header"
import Home from "./pages/Home"
import Profile from "./pages/Profile";
import Footer from "./components/ui/Footer";
import AdminPage from "./pages/AdminPage";
import { getAllUsers } from "./api/firestore-apis";
import { useEffect } from "react";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AddUser from "./components/react-admin/AddUser";
import EditUser from "./components/react-admin/EditUser";
import AdminDashboard from "./components/react-admin/AdminDashboard";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/admin",
    element: <ProtectedRoute component={AdminPage} />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "add-user", element: <AddUser /> },
      { path: "edit-user/:id", element: <EditUser /> }
    ]
  },
  {
    path: "/login",
    element: <Login />,
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
