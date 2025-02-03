import DashboardLayout from "@/Layout/DasboardLayout";
import Main from "@/Layout/Main";
import AllProduct from "@/Pages/AllProduct/AllProduct";
import ProductDetails from "@/Pages/AllProduct/ProductDetails";
import CheckOut from "@/Pages/CheckOut/CheckOut";
import CreateProduct from "@/Pages/DashBoard/Admin/CreateProduct";
import DashBoard from "@/Pages/DashBoard/DashBoard";
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
            element:<CheckOut/>,
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
          path: "manageUser",
          element:  <CreateProduct />
        },
    
 
      ],},
  ]);
  export default router;