import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
                <Footer></Footer>
                <Toaster />
            </div>
        </div>
    );
};

export default MainLayout;