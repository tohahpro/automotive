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
        const filterData = databaseLoaded.filter(item => item.brand_name.toUpperCase() == brand_name.toUpperCase())

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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-56 py-40">
                        {
                            data.map((item, idx) =>
                                <div key={idx}>
                                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                                        <figure><img src={item.photo} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Name : {item.product_name}</h2>

                                            <h2 className="card-title">{item.type}</h2>
                                            <Rating rating={item.rating}></Rating>
                                            <h2 className="card-title font-sans">Price : {item.price} $</h2>
                                            <div className="card-actions flex justify-center">
                                                <Link to={`/productsDetails/${item._id}`}
                                                    className="btn px-6">Details button
                                                </Link>
                                                <Link to={`/productUpdate/${item._id}`}
                                                    className="btn px-6">
                                                    Update button
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
            }
        </div>

    );
};

export default Products;