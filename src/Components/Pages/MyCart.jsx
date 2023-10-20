import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "../Brands/Rating";
import Swal from "sweetalert2";
import { MdDelete } from 'react-icons/md';

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
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-5 lg:px-56 py-60">
            {
                products?.map(product =>
                    <div key={product._id}>
                        <div className="card font-sans card-side bg-base-100 shadow-xl ">
                            <figure><img src={product.photo} alt="Movie" /></figure>
                            <div className="card-body w-5/6">
                                <Rating rating={product.rating}></Rating>
                                <h2 className="card-title">{product.product_name}</h2>
                                <p><span className="font-semibold">Type :</span> {product.type}</p>
                                <p><span className="font-semibold">Price :</span> {product.price} $</p>
                                <div className="card-actions">
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="btn px-6"><MdDelete className="text-lg"></MdDelete> Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyCart;