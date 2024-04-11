import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error.status);
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h3 className='text-xl'>Opssss!!! </h3>
            <p>{error.status }</p>
            {
                error.status === 404 && <div className=" flex flex-col items-center">
                    <h3>This page is not found</h3>
                    <Link to={'/'}><button className="btn bg-[tomato] my-4 text-black"> Back to Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;