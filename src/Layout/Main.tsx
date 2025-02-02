import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="min-h-screen pt-20 pl-3 lg:pt-24">
        <Navbar></Navbar>
        <div className="">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Main;