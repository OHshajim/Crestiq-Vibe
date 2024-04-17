import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const Estate = ({ property }) => {
    const { image_url, estate_title, id, segment_name, description, price, status, area, location, facilities } = property
    // console.log(facilities.length);
    return (
        <div>
            <div className="card  bg-[#191818] shadow-xl h-full rounded-lg p-5 " data-aos="fade-up">
                <figure ><img src={image_url} alt="Property" className="max-w-[730px] w-full h-[250px] rounded-lg " /></figure>
                <div className="py-5 ">
                    <h2 className="card-title font-bold">{estate_title}</h2>
                    <h4 className="text-sm font-semibold">{segment_name}</h4>
                    {
                        description.length > 100 ?
                            <p>
                                {description.slice(0, 100)}...
                            </p> : description
                    }
                    <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center ">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-base font-bold">Price : {price}$</h3>
                            <h3 className="flex  items-center gap-1" ><span className="text-xl font-bold"><IoLocationOutline /></span> {location}</h3>
                        </div>
                        <div className="flex  flex-col gap-4">
                            <h3 className="border border-blue-500 py-1 px-3 rounded-full font-bold flex justify-center">{status}</h3>
                            <h3 className="border border-blue-500 py-1 px-3 rounded-full font-bold flex justify-center">{area}</h3>
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
                            <Link to={`/EstateDetails/${id}`}><button className="btn  w-full">View Property</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

Estate.propTypes = {
    property: PropTypes.object.isRequired,
}
export default Estate;