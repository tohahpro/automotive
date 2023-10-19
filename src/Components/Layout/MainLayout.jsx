import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
                <Toaster />
            </div>
        </div>
    );
};

export default MainLayout;