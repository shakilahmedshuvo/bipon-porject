import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto pt-28">
                <h2 className="text-lg font-bold">
                    Even easier in the app
                </h2>
                <div className="text-[#6E6E6E] flex items-center gap-5 mt-5">
                    <div className="flex items-center text-xs font-medium border-[2px] border-[6E6E6E] w-fit px-5 py-1 rounded-xl">
                        <IoLogoApple className="text-2xl mr-4" />
                        App Store
                    </div>
                    <div className="flex items-center text-xs font-medium border-[2px] border-[6E6E6E] w-fit px-5 py-1 rounded-xl">
                        <FaGooglePlay className="text-xl mr-3" />
                        Play Store
                    </div>



                </div>
                <div className="mt-32">
                    <h2 className="text-base font-semibold text-gray-600">
                        Company information
                    </h2>
                </div>
                <div className="flex text-[12px] gap-5 text-gray-400 mt-12">
                    <p>User agreement</p>
                    <p>Contacts</p>
                    <p>Delivery</p>
                    <p>FAQ</p>
                    <p>Become a partner</p>
                    <p>Become a courier</p>
                    <p>Eats for Business</p>
                    <p>Plastic recycling</p>
                    <p>Order food in the Yandex Go app</p>
                    <p className="flex items-center justify-center gap-1">
                        <TfiEmail /> Feedback
                    </p>
                </div>

                <div className="flex items-center justify-between text-[11px] gap-5 text-gray-400 mt-28 mb-10">

                    <p>
                        © 2018-2024 Yandex Eats LLC
                    </p>

                    <p>
                        Project for Yandex
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;