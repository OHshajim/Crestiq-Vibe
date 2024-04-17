import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {
    const { properties } = useLoaderData()
    const id = useParams()
    const property = properties.find(property => property.id === parseInt(id.id))
    // console.log(id.id, property);
    const { view_property_url, estate_title, segment_name, description, price, status, area, location, facilities } = property

    return (
        <div className="max-w-[1600px] mx-auto">
            <Helmet><title>Crestiq Vibe || Property Details</title></Helmet>
            <h1 className="text-2xl sm:text-4xl xl:text-5xl  font-bold px-4  sm:px-10  pt-28" data-aos="fade-right">Property Details </h1>
            {/* {
                isLoading && <div className="flex justify-center items-center py-20"><span className="w-20 loading loading-spinner text-error"></span></div>
            } */}
            <div className=" flex flex-col lg:flex-row items-center justify-center p-4  sm:p-10 bg-base-100 shadow-xl mb-20 ">
                <figure><img src={view_property_url} alt="view property url" className=" max-w-2xl lg:w-fit w-full" data-aos="fade-right" /></figure>
                <div className=" lg:px-10 lg:py-0  py-10 " data-aos="fade-left">
                    <h2 className="text-3xl font-bold ">{estate_title}</h2>
                    <h3 className="text-lg font-medium ">{segment_name}</h3>
                    <p className="text-base text-justify ">{description}</p>
                    <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-base font-bold">Price : {price}$</h3>
                            <h3 className="flex  items-center gap-1" ><span className="text-xl font-bold"><IoLocationOutline /></span> {location}</h3>
                        </div>
                        <div className="flex  flex-col gap-4">
                            <h3 className="border border-blue-500 py-1 px-3 rounded-full font-bold flex justify-center">{status}</h3>
                            <h3 className="border border-blue-500 py-1 px-3 rounded-full font-bold flex justify-center">{area}</h3>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-medium">Facilities :</h3>
                        {
                            facilities.map((facility, idx) => <li className="text-sm" key={idx}>{facility}</li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;