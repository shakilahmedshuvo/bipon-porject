import { useEffect, useState } from "react";
import DrinkProducts from "./DrinkProducts";
import CookiesProduct from "./CookiesProduct";
import HotDogProduct from "./HotDogProduct";
import ShampooProduct from "./shampooProduct";
import ChipsProduct from "./ChipsProduct";
import GumProduct from "./GumProduct";
import JuiceProduct from "./JuiceProduct";
import DiaperProduct from "./DiaperProduct";

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
    const hotDogList = products.filter(item => item.category == "hotDog");
    const shampooList = products.filter(item => item.category == "shampoo");
    const chipsList = products.filter(item => item.category == "chips");
    const gumList = products.filter(item => item.category == "gum");
    const juiceList = products.filter(item => item.category == "juice");
    const diaperList = products.filter(item => item.category == "diaper");

    return (
        <>
            <DrinkProducts drinkList={drinkList} />
            <CookiesProduct cookiesList={cookiesList} />
            <HotDogProduct hotDogList={hotDogList} />
            <ShampooProduct shampooList={shampooList} />
            <ChipsProduct chipsList={chipsList} />
            <GumProduct gumList={gumList} />
            <JuiceProduct juiceList={juiceList} />
            <DiaperProduct diaperList={diaperList} />
            
            <p className="text-gray-400 mt-2 mb-16">
                Contractor (seller) TOO Гелиос, 050000, 050000, Алматы, ул. Карасай батыра, 69, BIN 990940004405

                Business hours: from 00:00 to 05:00; from 07:00 to 24:00
            </p>
        </>
    );
};

export default MainContent;