import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Rating from "./Rating";
import Slider from "./Slider";

const Products = () => {

    const databaseLoaded = useLoaderData([])
    const { brand_name } = useParams()


    const [data, setData] = useState([])
    const [noDataFound, setNoDataFound] = useState(false)

    useEffect(() => {
        const filterData = databaseLoaded?.filter(item => item.brand_name.toUpperCase() == brand_name.toUpperCase())

        if (filterData.length > 0) {
            setData(filterData)
        } else {
            setNoDataFound('For the time being, this firm has no product.')
        }

    }, [databaseLoaded, brand_name])

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            {
                noDataFound ?
                    <p className="flex items-center justify-center h-[80vh] text-sm  md:text-xl font-bold">{noDataFound}</p>
                    :
                    <div>
                        {
                            data ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-56 py-40">
                                {
                                    data?.map((item, idx) =>
                                        <div key={idx}>
                                            <div className="card card-compact w-full bg-base-200 shadow-xl">
                                                <figure><img className="md:h-64" src={item.photo} alt="Shoes" /></figure>
                                                <div className="card-body">

                                                    <h2 className="card-title font-sans">{item.product_name}</h2>
                                                    <Rating rating={item.rating}></Rating>

                                                    <h2 className="card-title">Type : {item.type}</h2>

                                                    <h2 className="card-title font-sans">Price : <span className="text-red-500"> {item.price} </span>$</h2>
                                                    <div className="card-actions flex justify-center">
                                                        <Link to={`/productsDetails/${item._id}`}
                                                            className="btn px-6 bg-black text-white">Details button
                                                        </Link>
                                                        <Link to={`/productUpdate/${item._id}`}
                                                            className="btn px-6 bg-black text-white">
                                                            Update button
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                                :
                                <p>loading ....</p>
                        }
                    </div>
            }
        </div>

    );
};

export default Products;