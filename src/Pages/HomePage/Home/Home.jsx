import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";
import MassageBtn from "../MassageBtn/MassageBtn";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Home = () => {
    return (
        <div className="bg-[#F5F4F2]">
            <Navbar />
            <div className="container mx-auto">
                <div className="pt-20 mb-10">
                    <hr className="mb-1 border-[1px] border-gray-300 col-span-12" />
                </div>

                <div className="grid grid-cols-5 max-w-[93%] mx-auto px-5">
                    <div>
                        <SideBar />
                    </div>
                    <div className="col-span-3 me-5">
                        <MainContent />
                    </div>
                    <div className="mt-10">
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