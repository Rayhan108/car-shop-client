import Main from "@/Layout/Main";
import AllProduct from "@/Pages/AllProduct/AllProduct";
import ProductDetails from "@/Pages/AllProduct/ProductDetails";
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
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/signUp",
            element: <Registration/>,
          },
        ]
    }
  ]);
  export default router;