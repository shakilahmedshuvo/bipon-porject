import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TbLocationFilled } from "react-icons/tb";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import SideBar from "../SideBar/SideBar";
import Cart from "../Cart/Cart";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const [menuOpenCart, setMenuOpenCart] = useState(false);
    const toggleMenuCart = () => setMenuOpenCart(!menuOpenCart);

    return (
        <>

            {/* lg device start */}
            <div className="lg:block hidden bg-[#F5F4F2]">
                <div className="grid grid-cols-12 px-6 fixed z-10 w-full bg-[#F5F4F2]">

                    {/* navbar logo start */}
                    <div className="col-span-3 flex items-center py-4">
                        <Link to={"/"}>
                            <img
                                className="pe-5 py-2 border-e-[1px] border-black"
                                src="https://avatars.mds.yandex.net/get-bunker/128809/0efb578cd41a9939800311677e6f4f8a12f04e90/orig"
                                alt="" />
                        </Link>
                        <img
                            className="h-[48px] px-5"
                            src="https://eda.yandex/images/3513074/25b26e65428af401c5d3651be009ac9f.png"
                            alt="" />
                    </div>
                    {/* navbar logo end */}


                    {/* input section start */}
                    <form className="col-span-3 flex items-center ms-10 w-[80%]">

                        <div className="grid grid-cols-12 rounded-2xl border-gray-400 border-[1px] bg-[#FFFFFF] w-full">

                            <div className="col-span-2 px-2 py-3 w-fit">
                                <FiSearch className="text-2xl text-gray-600" />
                            </div>

                            <input type="text" name="search" placeholder="Найти в Helios" className="focus:outline-none focus-within:outline-none col-span-9" />
                        </div>
                    </form>
                    {/* input section end */}

                    {/* location section start */}
                    <div className="col-span-2 flex items-center">
                        <div className="flex items-center border-[1px]  border-gray-400 w-fit text-[#21201F] font-medium rounded-2xl pe-3">
                            <div className="ps-4 pr-2 py-3">
                                <TbLocationFilled className="text-xl" />
                            </div>
                            Enter delivery address
                        </div>
                    </div>
                    {/* location section end */}


                    {/* login btn start */}
                    <div className="col-span-4 flex items-center justify-end">
                        <button className="bg-[#E7E6E4] font-medium text-base px-6 py-3 rounded-2xl flex items-center justify-center">
                            Log in
                        </button>
                    </div>
                    {/* login btn end */}

                </div>
            </div>

            {/* lg device end */}

            {/* sm device start */}
            <div className="block lg:hidden bg-[#F5F4F2]">
                <div className="grid grid-cols-12 fixed top-0 z-10 w-full bg-[#F5F4F2] py-1">

                    <div className="col-span-2">
                        <div
                            onClick={toggleMenu}
                            className="flex items-starts justify-center col-span-2">
                            <HiMenuAlt2 className="w-9 h-9 text-black mt-2" />
                        </div>
                    </div>

                    <div className="col-span-8">
                        <Link to={"/"} className="flex items-center justify-center">
                            <img
                                className="pe-5 py-2 border-e-[1px]k"
                                src="https://avatars.mds.yandex.net/get-bunker/128809/0efb578cd41a9939800311677e6f4f8a12f04e90/orig"
                                alt="" />
                        </Link>
                    </div>

                    <div onClick={toggleMenuCart}
                        className="col-span-2 flex items-center justify-center text-3xl">
                        <CgShoppingCart />
                    </div>
                </div>
            </div>

            {/* sm sidebar start */}
            <div
                className={menuOpen ?
                    "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-gray-50 p-10 ease-in-out duration-500 z-10"
                    :
                    "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"}>
                <div
                    onClick={toggleMenu}
                    className="cursor-pointer">
                    <div className="flex items-center justify-end">
                        <IoMdCloseCircleOutline className="h-7 w-7 text-black" />
                    </div>
                    <SideBar />
                </div>
            </div>
            {/* sm sidebar end */}
            {/* sm sidebar start */}
            <div
                className={menuOpenCart ?
                    "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-gray-50 p-10 ease-in-out duration-500 z-10"
                    :
                    "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"}>
                <div
                    onClick={toggleMenuCart}
                    className="cursor-pointer">
                    <div className="flex items-center justify-end">
                        <IoMdCloseCircleOutline className="h-7 w-7 text-black" />
                    </div>
                    <Cart />
                </div>
            </div>
            {/* sm sidebar end */}
            {/* sm device end */}
        </>
    );
};

export default Navbar;