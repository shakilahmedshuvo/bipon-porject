import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
import SingleProductCard from '../SingleProductCard/SingleProductCard';
import { IoIosArrowForward } from 'react-icons/io';
import shampoo from "../../../../public/SidebarIcon/5.png";

const ShampooProduct = ({ shampooList }) => {
    return (
        <div>
            <div className='flex items-center justify-between mt-2 mb-5'>
                <div className='flex items-center'>
                    <img src={shampoo} alt="" />
                    <h2 className='text-2xl font-semibold ms-3'>
                        Хот-доги
                    </h2>
                </div>
                <div className='flex items-center w-fit px-4 py-2 hover:bg-[#E7E6E4] rounded-xl duration-300'>
                    All <IoIosArrowForward className='ms-2' />
                </div>
            </div>

            {/* slider section start */}
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                // navigation={true}
                // modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    620: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    }
                    ,
                    840: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
                }}>
                {/* map section start */}
                {
                    shampooList?.map((data) => (
                        <SwiperSlide
                            key={data.id}>
                            <SingleProductCard data={data} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default ShampooProduct;