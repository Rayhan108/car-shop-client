import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../assets/logo.png";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


  // console.log(mode);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    toast.success("Logout Success");
  };
  return (
    <nav
      className={cn(
        " fixed top-0 bg-white w-full z-50 shadow-md",
       
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
              to="/allProducts"
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
            <Link to="/dashboard" className="block px-4 py-2 text-sm  ">
              Dashboard
            </Link>
            <Link to="/cart" className=" hover:text-gray-900">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            {user ? (
              <Button>
                <Link
                  onClick={() => handleLogout()}
                  to=""
                  className="block px-4 py-2 text-sm  "
                >
                  signOut
                </Link>{" "}
              </Button>
            ) : (
              <Button>
                {" "}
                <Link to="/login" className="block px-4 py-2 text-sm  ">
                  Login
                </Link>{" "}
              </Button>
            )}
            {/* <ModeToggle/> */}
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
                to="/allProducts"
                className="block  px-3 py-2 text-base font-medium  hover:bg-[#003d1f] "
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
           
                {/* <ModeToggle /> */}
       
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-base font-medium  hover:bg-gray-50"
              >
                Dashboard
              </Link>
              {user ? (
                <Link
                  onClick={() => handleLogout()}
                  to=""
                  className="block px-4 py-2 text-sm  hover:bg-gray-100"
                >
                  signOut
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm  hover:bg-gray-100"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
