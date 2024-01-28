import cartSvg from "../../../assets/Cart.svg";

const Cart = () => {
    return (
        <div className="bg-[#FFFFFF] h-[90vh] rounded-3xl ms-2 w-fit sticky top-10 pt-10">

            <h2 className="text-2xl pt-4 ps-4 font-semibold w-[320px]">
                Cart
            </h2>

            <div>

                <div className="flex items-center justify-center mt-52">
                    <img src={cartSvg} alt="" />
                </div>
                <h2 className="text-2xl font-semibold text-center mt-4">
                    Your cart is currently
                    <br />
                    empty
                </h2>

                <hr className="mt-52 mx-8" />

            </div>

        </div>
    );
};

export default Cart;