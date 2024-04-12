import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = () => {
    const { properties } = useLoaderData()
    console.log(properties);
    return (
        <div className="my-20 max-w-[1700px]  mx-auto">
            <div  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    properties.map(property => <Estate key={property.id} property={property}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;