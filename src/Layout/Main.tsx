import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="">
        <Navbar></Navbar>
        <div className="min-h-screen max-w-7xl mx-auto pt-20 pl-3 lg:pt-20">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Main;