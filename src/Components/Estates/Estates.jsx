import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = () => {
    const { properties, isLoading } = useLoaderData()
    // console.log(properties);
    return (
        <div className="my-20 max-w-[1600px]  mx-auto">
            <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold mt-10 mb-3">Latest Properties</h1>
            <p className="text-center mb-10 mx-8">Explore our premier selection of properties for sale or rent from elegant hotels to cozy cabins, chic villas to charming B&Bs. Your perfect retreat awaits.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 m-2 sm:m-8 ">
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