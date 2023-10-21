import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Rating from "./Rating";
import Swal from "sweetalert2";


const ProductsDetails = () => {

    const dataLoad = useLoaderData()
    const { id } = useParams()
    // console.log(id);

    const [details, setDetails] = useState('')

    useEffect(() => {
        const findService = dataLoad.find(item => item._id === id)
        setDetails(findService)

    }, [dataLoad, id])

    const { photo, product_name, type, price, rating } = details

    // console.log(details);



    const handleOrder = (e) => {
        e.preventDefault()
        const orderItem = {
            photo: photo,
            product_name: product_name,
            type: type,
            price: price,
            rating: rating
        }

        console.log(orderItem);


        fetch('https://automotive-server-site-two.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add To Cart',
                        icon: 'success',
                        confirmButtonText: 'Yes'
                    })
                }
            })
    }


    return (
        <div>
            <div className="flex font-sans justify-center items-center py-60">
                <div className="border rounded-xl bg-slate-100 w-[40rem] py-8">
                    {/* photo  */}
                    <div className="flex items-center justify-center">
                        <img src={details.photo} alt="" />
                    </div>

                    {/* body  */}
                    <div className="px-12 space-y-2 ">
                        <p className="text-xl font-semibold">Name : {details.product_name}</p>
                        <p className="flex items-center gap-1"><span className="text-xl font-semibold"> Ratings :</span> <Rating rating={details.rating}></Rating></p>
                        <p className="text-base"><span className="text-xl font-semibold">Details : </span> {details.description}</p>

                        <p className="text-xl font-semibold">Price : <span className="text-red-500">{details.price}</span> $</p>
                        <Link
                            onClick={handleOrder}

                            className="btn w-full bg-black text-white hover:text-black">Add To Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;