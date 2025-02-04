import DashboardLayout from "@/Layout/DasboardLayout";
import Main from "@/Layout/Main";
import ProtectedRoute from "@/Layout/ProtectedRoute";
import AllProduct from "@/Pages/AllProduct/AllProduct";
import ProductDetails from "@/Pages/AllProduct/ProductDetails";
import CheckOut from "@/Pages/CheckOut/CheckOut";
import CreateProduct from "@/Pages/DashBoard/Admin/CreateProduct";
import ManageProduct from "@/Pages/DashBoard/Admin/ManageProducts";
import ManageUser from "@/Pages/DashBoard/Admin/ManageUser";
import UpdateProduct from "@/Pages/DashBoard/Admin/UpdateProduct";

import DashBoard from "@/Pages/DashBoard/DashBoard";
import ManageProfile from "@/Pages/DashBoard/User/manageProfile";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import Registration from "@/Pages/Registration/Registration";
import {
    createBrowserRouter,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/allProducts",
            element: <AllProduct/>,
          },
          {
            path: "/product/:id",
            element:<ProductDetails/>,
          },
          {
            path: "/checkout",
            element:<ProtectedRoute role="user"><CheckOut/></ProtectedRoute>,
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/signUp",
            element: <Registration/>,
          },
        ]
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          index:true,
          element:  <DashBoard />
        },
        {
          path: "createProduct",
          element:<ProtectedRoute role="admin"><CreateProduct /></ProtectedRoute>  
        },
        {
          path: "manageProducts",
          element: <ProtectedRoute role="admin"> <ManageProduct /></ProtectedRoute>
        },
        {
          path: "manageUsers",
          element: <ProtectedRoute role="admin"> <ManageUser /></ProtectedRoute>
        },
    
        {
          path: "updateProduct/:id",
          element:  <ProtectedRoute role="admin"><UpdateProduct /></ProtectedRoute>
        },
        {
          path: "manageProfile",
          element: <ProtectedRoute role="user"> <ManageProfile /></ProtectedRoute>
        },
 
      ],},
  ]);
  export default router;