import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const Estate = ({ property }) => {
    const { image_url, estate_title, id, segment_name, description, price, status, area, location, facilities } = property
    // console.log(facilities.length);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl h-full rounded-lg ">
                <figure ><img src={image_url} alt="Property" className="max-w-[730px] w-full h-[250px] rounded-lg m-5" /></figure>
                <div className="p-5 ">
                    <h2 className="card-title">{estate_title}</h2>
                    <h3 className="">{segment_name}</h3>
                    {
                        description.length > 100 ?
                            <>
                                {description.slice(0, 100)}...
                            </> : description
                    }
                    <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="flex flex-col   ">
                            <p>Price : {price}<span className="text-red-500">$</span></p>
                            <p className="flex  items-center gap-1" ><span className="text-xl font-bold"><IoLocationOutline /></span> {location}</p>
                        </div>
                        <div className="flex  flex-col space-y-2">
                            <p className="border py-1 px-3 rounded-full font-bold flex justify-center">{status}</p>
                            <p className="border py-1 my-3 px-3 rounded-full font-bold flex justify-center">{area}</p>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div >
                            <h3>Facilities :</h3>
                            <div className="ml-10">
                                <ul className=" list-disc">
                                    {
                                        facilities.slice(0, 2).map((facility, idx) => <li className="" key={idx}>{facility}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="mt-7">
                            <Link to={`/EstateDetails/${id}`}><button className="btn btn-primary w-full">View Property</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

Estate.propTypes = {
    property: PropTypes.array.isRequired,
}
export default Estate;