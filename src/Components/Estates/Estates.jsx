import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = () => {
    const { properties, isLoading } = useLoaderData()
    // console.log(properties);
    return (
        <div className="my-20 max-w-[1700px]  mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    isLoading && <div className="flex justify-center items-center my-20"><span className="w-20 loading loading-spinner text-error"></span></div>
                }
                {
                    properties.map(property => <Estate key={property.id} property={property}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;