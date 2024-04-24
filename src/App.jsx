
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile";
import AdminPage from "./pages/AdminPage";
import { getAllUsers } from "./api/firestore-apis";
import { useEffect } from "react";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AddUser from "./components/react-admin/AddUser";
import EditUser from "./components/react-admin/EditUser";
import AdminDashboard from "./components/react-admin/AdminDashboard";
import Layout from "./components/ui/Layout";
import { insertMultipleUsers } from "./api/insertMultipleData";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { addMultipleUsers } from "./redux/usersSlice";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute component={AdminPage} />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "add-user", element: <AddUser /> },
          { path: "edit-user/:id", element: <EditUser /> }
        ]
      },
      {
        path: "/login",
        element: <Login />,
      }
    ]
  },
  
]);


function App() {


  return (
    <>
     <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
