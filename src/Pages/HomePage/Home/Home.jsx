import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";
import MassageBtn from "../MassageBtn/MassageBtn";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Home = () => {
    return (
        <div className="bg-[#F5F4F2] overflow-x-hidden">
            <Navbar />
            <div className="container mx-auto">
                <div className="lg:pt-20 mb-10">
                    <hr className="mb-1 border-[1px] border-gray-300 col-span-12" />
                </div>

                <div className="grid lg:grid-cols-5 max-w-[93%] mx-auto px-5">
                    <div className="hidden lg:block">
                        <SideBar />
                    </div>
                    <div className="lg:col-span-3 me-5">
                        <MainContent />
                    </div>
                    <div className="mt-10 hidden lg:block">
                        <Cart />
                    </div>
                </div>
            <MassageBtn />
            </div>
            <Footer />
        </div>
    );
};

export default Home;