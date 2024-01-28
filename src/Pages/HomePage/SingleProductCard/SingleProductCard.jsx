const SingleProductCard = ({ data }) => {
    const { img, price, title, quantity } = data;
    return (
        <div className="bg-[#FFFFFF] rounded-2xl pt-3 pb-3 mb-10">
            <img src={img} alt="" />
            <div className="mx-4 mt-2">
                <p className="text-2xl font-medium">
                    {price}₸
                </p>
                <p className="mt-1">
                    {title.slice(0, 14)}...
                </p>
                <p className="text-gray-500 my-1 font-medium">
                    {quantity}
                </p>

                <div className="bg-[#F5F4F2] flex items-center justify-center text-2xl font-semibold py-2 rounded-2xl">
                    +
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;