import { useEffect, useState } from "react";
import deliveryLogo from "../../../assets/icons/deliveryLogo.png";

const SideBar = () => {
    // get the form json
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        fetch("Catalog.json")
            .then(res => res.json())
            .then(data => {
                setCatalog(data);
                // console.log(data);
            })
    }, []);

    return (
        <div>
            {/* top heading start */}
            <div>
                <h2 className="font-semibold text-xl">
                    Доставка
                </h2>
                <p className="flex font-medium mt-2">
                    <img src={deliveryLogo} alt="" />
                    delivery unavailable
                </p>
            </div>
            {/* top heading end */}

            {/* Catalog section start */}
            <div className="mt-9">

                <h2 className="font-semibold text-xl">
                    Catalog
                </h2>

                {/* map for catalog section start */}
                <section className="font-medium h-full overflow-auto mt-1">
                    {
                        catalog?.slice(0, 16).map((item) => (
                            <div key={item?.id} className="flex items-center my-2 cursor-pointer hover:bg-[#E7E6E4] rounded-2xl duration-300 px-3">
                                <img
                                    className="h-full"
                                    src={item?.img}
                                    alt="" />
                                <p className="ms-4 text-base">
                                    {item.name}
                                </p>
                            </div>
                        ))
                    }

                    <h2 className="hover:bg-[#E7E6E4] rounded-2xl duration-300 py-3 px-3">
                        Крупы, макароны
                    </h2>

                    {
                        catalog?.slice(16, 23).map((item) => (
                            <div key={item?.id} className="flex items-center my-2 cursor-pointer hover:bg-[#E7E6E4] rounded-2xl duration-300 px-3">
                                <img
                                    className="h-full"
                                    src={item?.img}
                                    alt="" />
                                <p className="ms-4 text-base">
                                    {item.name}
                                </p>
                            </div>
                        ))
                    }
                </section>
                {/* map for catalog section end */}

            </div>
            {/* Catalog section end */}
        </div>
    );
};

export default SideBar;