import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle/mode-toggle";
import { cn } from "@/lib/utils";
import logo from "../assets/logo.png";
import {  logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("light");

  console.log(mode);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
const user = useAppSelector(selectCurrentUser);
// console.log(user);
const dispatch = useAppDispatch();
const handleLogout=()=>{
dispatch(logout())
toast.success("Logout Success")

}
  return (
    <nav
      className={cn(
        " fixed top-0 w-full z-50 shadow-md",
        mode == "dark" && "bg-white text-black"
      )}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-full">
              <img src={logo} />
            </div>
            <div className="">
              <Link to="/" className="text-xl font-title font-bold ">
                NextGen Cars
              </Link>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden font-body lg:flex lg:items-center lg:space-x-6">
            <Link to="/" className="text-sm font-medium  hover:text-gray-900">
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium  hover:text-gray-900"
            >
              All Products
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium  hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium  hover:text-gray-900"
            >
              Contact
            </Link>
            <Link to="/cart" className=" hover:text-gray-900">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <div>
              <div
                onClick={() =>
                  setMode(localStorage.getItem("vite-ui-theme") as string)
                }
              >
                <ModeToggle />
              </div>
            </div>

            <div className="relative">
              {/* User Avatar Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
              >
                <img className="h-8 w-8 rounded-full" src="" alt="User" />
              </button>

              {/* Dropdown Content */}
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 font-body">
                  <div className="py-1">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    {
                      user ?   <Link onClick={()=>handleLogout()}
                      to="/logOut"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      LogOut
                    </Link> :
                     <Link
                      to="/login"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Login
                    </Link>  
                   
                    }
                
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex  items-center lg:hidden">
            <button onClick={toggleMenu} className=" focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1 font-body">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium  hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-base font-medium  hover:bg-gray-50"
              >
                All Products
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium  hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium  hover:bg-gray-50"
              >
                Contact
              </Link>
              <Link
                to="/cart"
                className="block px-3 py-2 text-base font-medium  hover:bg-gray-50"
              >
                <ShoppingCart className="inline h-5 w-5 mr-2" />
                Cart
              </Link>
              <div
                onClick={() =>
                  setMode(localStorage.getItem("vite-ui-theme") as string)
                }
              >
                <ModeToggle />
              </div>
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-base font-medium  hover:bg-gray-50"
              >
                Dashboard
              </Link>
              {
                      user ?   <Link onClick={()=>handleLogout()}
                      to="/logOut"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      LogOut
                    </Link> :
                     <Link
                      to="/login"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Login
                    </Link>  
                   
                    }
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
