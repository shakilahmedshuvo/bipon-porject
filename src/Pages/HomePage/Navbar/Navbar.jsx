import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TbLocationFilled } from "react-icons/tb";

const Navbar = () => {
    return (
        <div className="">
            <div className="grid grid-cols-12 px-6 fixed bg-[#F5F4F2] z-10 w-full">

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
    );
};

export default Navbar;