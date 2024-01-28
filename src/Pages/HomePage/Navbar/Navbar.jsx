import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="grid grid-cols-12">

            {/* navbar logo start */}
            <div className="col-span-3 flex items-center my-4">
                <Link to={"/"}>
                    <img
                        className="px-5 py-2 border-e-[1px] border-black"
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
            <form
                className="flex items-center col-span-3 ms-10 w-[80%]">

                <div className="grid grid-cols-12 rounded-2xl border-gray-400 border-[1px] bg-[#FFFFFF] w-full">

                    <div className="col-span-2 px-2 py-3 w-fit">
                        <FiSearch className="text-2xl text-gray-600" />
                    </div>

                    <input type="text" name="search" placeholder="Найти в Helios" className="focus:outline-none focus-within:outline-none col-span-9" />
                </div>
            </form>
            {/* input section end */}


        </div>
    );
};

export default Navbar;