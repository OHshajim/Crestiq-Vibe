import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const Estate = ({ property }) => {
    const { image_url, estate_title, id, segment_name, description, price, status, area, location, facilities } = property
    // console.log(facilities.length);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl h-full rounded-lg">
                <figure ><img src={image_url} alt="Property" className="max-w-[730px] w-full min-h-[250px] max-h-[410px] h-full rounded-lg " /></figure>
                <div className="p-5 space-y-2 ">
                    <h2 className="card-title">{estate_title}</h2>
                    <h3 className="">{segment_name}</h3>
                    {
                        description.length > 100 ?
                            <>
                                {description.slice(0, 100)}...
                            </> : description
                    }
                    <div className="flex items-center justify-between   ">
                        <p>Price : {price} $</p>
                        <p className="border py-1 px-3 rounded-full font-bold">{status}</p>
                    </div>
                    <div className="flex  items-center justify-between">
                        <p className="flex  items-center gap-1" > <span className="text-xl font-bold"><IoLocationOutline /></span> {location}</p>
                        <p className="border py-1 px-3 rounded-full font-bold">{area}</p>
                    </div>
                    <div className="flex-grow">
                        <h3>Facilities :</h3>
                        {
                            facilities.slice(0, 2).map((facility, idx) => <li key={idx}>{facility}</li>)
                        }
                    </div>
                    <div className="card-actions justify-end ">
                        <Link to={`/EstateDetails/${id}`}><button className="btn btn-primary">View Property</button></Link>
                </div>
            </div>
        </div>
        </div >
    );
};

Estate.propTypes = {
    property:PropTypes.array.isRequired,
}
export default Estate;