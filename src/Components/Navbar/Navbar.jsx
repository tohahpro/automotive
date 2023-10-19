import { NavLink } from "react-router-dom";

import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

// import Logo from "../Logo/Logo";


const Navbar = () => {

    const [open, setOpen] = useState(false)
    const { user, LogOut } = useContext(AuthContext)

    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 30) {
                setColor('#111111')
                setTextColor('#ffffff')
            }
            else {
                setColor('transparent')
                setTextColor('#111111')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

    return (
        <div>
            <nav style={{ backgroundColor: `${color}` }}
                className="
                        absolute top-8 left-0 right-0 z-[2]           
                        lg:fixed items-center justify-between lg:top-0 lg:left-0 lg:w-full lg:z-[10] lg:ease-in lg:duration-300 lg:px-56 lg:pb-2 md:pt-6">


                <div className="flex items-center justify-between">
                    {/* <Logo></Logo> */}

                    <h2 className="text-3xl font-medium text-white pl-2 md:pl-0">Logo</h2>


                    <div className="md:hidden justify-end text-2xl pr-2 text-white" onClick={() => setOpen(!open)}>
                        {
                            open === true ? <BiMenuAltRight></BiMenuAltRight> : <BiMenu></BiMenu>
                        }
                    </div>

                    <div
                        style={{ color: `${textColor}` }}
                        className={`absolute md:flex mt-64 px-36 bg-black md:m-0  md:p-0 duration-2000
                ${open ? ' ' : 'hidden'} md:static 
                md:bg-transparent text-center space-y-2`}
                    >
                        <ul className="md:flex lg:gap-12 md:items-center md:mr-12  text-lg font-semibold">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#67B6F4] underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addProduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#67B6F4] underline" : ""
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/myCart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#67B6F4] underline" : ""
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>
                        </ul>

                        <div>
                            {
                                user ?

                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={user.photoURL}
                                                    alt="" />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 text-2xl font-medium bg-black/80 text-white">
                                            <li>
                                                <a className="justify-between">
                                                    {user?.displayName}
                                                </a>
                                            </li>

                                            <li>
                                                <button className="py-2 px-3 hover:text-white" onClick={LogOut}>Logout</button>
                                            </li>
                                        </ul>
                                    </div> :


                                    <ul>
                                        <li className="text-lg font-semibold pb-2">
                                            <NavLink
                                                to='/login'
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#67B6F4] underline" : ""
                                                }
                                            >LogIn
                                            </NavLink>
                                        </li>
                                    </ul>

                            }
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;