

import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Rating from "./Rating";




const Products = () => {

    const databaseLoaded = useLoaderData([])
    const { brand_name } = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        const filterData = databaseLoaded.filter(item => item.brand_name.toUpperCase() == brand_name.toUpperCase())
        setData(filterData)
    }, [databaseLoaded, brand_name])

    return (
        <div className="my-40">
            {
                data ?

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-56">
                        {
                            data.map((item, idx) =>
                                <div key={idx}>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                                        <figure><img src={item.photo} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.product_name}</h2>
                                            <h2 className="card-title">{item.brand_name}</h2>
                                            <h2 className="card-title">{item.type}</h2>

                                            <Rating rating={item.rating}></Rating>
                                            <h2 className="card-title">{item.price}</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions flex justify-center">

                                                <Link to={`/productsDetails/${item._id}`}
                                                    className="btn px-6">Details button
                                                </Link>
                                                <Link
                                                    className="btn px-6">
                                                    Update button
                                                </Link>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div> :
                    <p className="flex justify-center items-center h-[100vh]">not data</p>
            }
        </div>

    );
};

export default Products;