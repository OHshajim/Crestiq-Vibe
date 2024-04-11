import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className=" flex flex-col items-center justify-center">
            <img src="https://i.ibb.co/xzRYDgn/3747371.jpg" alt="Error" className=""/>
            <p className="text-red-600 font-bold mt-5">{error.error.message }</p>
            {
                error.status === 404 && <div className=" flex flex-col items-center">
                    <h3>This page is not found</h3>
                    <Link to={'/'}><button className="btn bg-[tomato] my-2 text-white font-bold text-lg hover:bg-black"> Back to Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;