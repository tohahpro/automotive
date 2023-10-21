import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from 'react-icons/md';
import { PiCurrencyDollarThin } from 'react-icons/pi';
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
        // <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-5 lg:px-56 py-60">
        //     {
        //         products?.map(product =>
        //             <div key={product._id}>
        //                 <div className="card font-sans card-side bg-base-100 shadow-xl ">
        //                     <figure><img src={product.photo} alt="Movie" /></figure>
        //                     <div className="card-body w-5/6">
        //                         <Rating rating={product.rating}></Rating>
        //                         <h2 className="card-title">{product.product_name}</h2>
        //                         <p><span className="font-semibold">Type :</span> {product.type}</p>
        //                         <p><span className="font-semibold">Price :</span> {product.price} $</p>
        //                         <div className="card-actions">
        //                             <button
        //                                 onClick={() => handleDelete(product._id)}
        //                                 className="btn px-6"><MdDelete className="text-lg"></MdDelete> Delete</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //     }
        // </div>

        <div>
            <div className="overflow-x-auto md:px-56 py-44 h-[70vh]">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg text-[#A3A9AD] border-[#A3A9AD] font-bold">
                                <th>No</th>
                                <th></th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Ratings</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                products.map((product, idx) =>
                                    <tr key={idx} className="text-lg border-[#A3A9AD]">
                                        <td>{idx + 1}</td>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="">
                                                    <div className="w-32">
                                                        <img src={product.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="font-sans">{product.product_name}</td>

                                        <td>{product.type}</td>
                                        <td><Rating rating={product.rating}></Rating></td>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="text-lg text-red-500 font-medium font-sans"> {product.price} </span>
                                                <PiCurrencyDollarThin></PiCurrencyDollarThin>
                                            </div>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDelete(product._id)}
                                                className="px-5 py-2 bg-black text-white border-2 border-[#ECEAEA] rounded hover:text-red-500 hover:border-red-500 flex  items-center gap-1"><MdDelete></MdDelete>  Delete</button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;