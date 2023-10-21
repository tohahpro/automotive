import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Rating from "../Brands/Rating";

const MyCart = () => {

    const dataLoaded = useLoaderData([])
    const [products, setProducts] = useState(dataLoaded)



    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://automotive-server-site-two.vercel.app/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'

                            )
                            const remaining = products.filter(item => item._id !== _id);
                            setProducts(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className="px-20 lg:px-56">
            <div className="container pt-40">
                <table className="lg:w-full flex flex-row flex-no-wrap sm:bg-white overflow-hidden sm:shadow-lg my-5">
                    <thead className="text-white ">
                        <tr className="bg-[#2b1b9a] flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 ">
                            <th className="p-3 text-left">No</th>
                            <th className="p-3 text-left">Photo</th>
                            <th className="p-3 text-left">Product</th>
                            <th className="p-3 text-left">Type</th>
                            <th className="p-3 text-left">Rating</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-left" width="110px">
                                Action
                            </th>
                        </tr>



                    </thead>
                    <tbody className="flex-1 sm:flex-none">
                        {/* First Row */}
                        {
                            products.map((product, idx) => <tr key={product._id} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-2 lg:border-none border-red-500">
                                <td className="border-grey-light border hover:bg-gray-100 p-3">
                                    {idx + 1}
                                </td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3">
                                    <div className="avatar">
                                        <div className="w-28 h-20">
                                            <img
                                                src={product.photo}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 font-sans">
                                    {product.product_name}
                                </td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3">
                                    {product.type}
                                </td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3">
                                    <Rating rating={product.rating}></Rating>
                                </td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate font-sans">
                                    {product.price} $
                                </td>
                                <td onClick={() => handleDelete(product._id)} className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-semibold cursor-pointer">
                                    Delete
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MyCart;