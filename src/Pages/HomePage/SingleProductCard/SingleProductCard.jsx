const SingleProductCard = ({ data }) => {
    const { img, price, title, quantity } = data;

    return (
        <div>
<img src={img} alt="" />
        </div>
    );
};

export default SingleProductCard;