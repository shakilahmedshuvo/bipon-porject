import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Home = () => {
    return (
        <div className="bg-[#F5F4F2]">
            <Navbar />
            <div className="grid grid-cols-5 max-w-[1508px] mx-auto mt-8">
                <div className="h-[100vh]">
                    <SideBar />
                </div>
                <div className="col-span-3">
                    <MainContent />
                </div>
                <div>
                    <Cart />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;