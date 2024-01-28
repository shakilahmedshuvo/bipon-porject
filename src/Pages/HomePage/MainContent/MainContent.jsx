import { useEffect, useState } from "react";
import DrinkProducts from "./DrinkProducts";
import CookiesProduct from "./CookiesProduct";
;

const MainContent = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("product.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);

    // filter data
    const drinkList = products.filter(item => item.category == "drink");
    const cookiesList = products.filter(item => item.category == "cookies");

    return (
        <div>
            <DrinkProducts drinkList={drinkList} />
            <CookiesProduct cookiesList={cookiesList} />
        </div>
    );
};

export default MainContent;