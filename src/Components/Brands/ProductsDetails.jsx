import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Rating from "./Rating";


const ProductsDetails = () => {

    const dataLoad = useLoaderData()
    const { id } = useParams()
    // console.log(id);

    const [details, setDetails] = useState('')

    useEffect(() => {
        const findService = dataLoad.find(item => item._id === id)
        setDetails(findService)

    }, [dataLoad, id])

    console.log(details);

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="border rounded-xl bg-slate-100 w-[40rem]">
                {/* photo  */}
                <div className="flex items-center justify-center">
                    <img src={details.photo} alt="" />
                </div>

                {/* body  */}
                <div className="px-12 py-10 space-y-2">

                    <h2 className="text-xl font-semibold">Brand : {details.brand_name}</h2>
                    <p className="text-xl font-semibold">Product : {details.product_name}</p>

                    <p className="flex items-center gap-1"><span className="text-xl font-semibold"> Rating :</span> <Rating rating={details.rating}></Rating></p>

                    <p className="text-base font-medium"><span className="text-xl font-semibold">Details : </span> {details.description}</p>

                    <p className="text-xl font-semibold">Price : {details.price} $</p>
                    <Link className="btn w-full bg-black text-white hover:text-black">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;